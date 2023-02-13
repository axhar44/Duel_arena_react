import ApiService from "./api.service";
import UtilityService from "./utility.service";

const apiService = new ApiService();
const utilityService = new UtilityService();

export default class NetworkService {

    constructor() { }


    login(data){
        return this.axiosPostResponse("login", data);
    }



    verify_otp(data){
        return this.axiosPostResponse("verify_otp", data);
    }



    change_password(data){
        return this.axiosPostResponse("change_password", data);
    }


    

    get_support_ticket_data(data){
        return this.axiosPostResponse("get_support_ticket_data", data);
    }

    get_user_orders_data(data){
        return this.axiosPostResponse("get_user_orders_data", data);
    }

    


    
    create_support_ticket(data){
        return this.axiosPostResponse("create_support_ticket", data);
    }

    

    sent_order(data){
        return this.axiosPostResponse("add_order", data);
    }



    get_last_order_id(data){
        return this.axiosPostResponse("get_last_order_id", data);
    }



    register(data){
        return this.axiosPostResponse("register", data);
    }

    getRooms()
    {
        return this.axiosGetResponse('chat/chat-room')
    }

    sendChatMsg(data)
    {
        return this.axiosPostResponse('chat/send-user-msg-in-chat-room',data)
    }
    
    get_chat_room_list_by_id(data)
    {
        return this.axiosPostResponse('chat/chat-room-list-by-id',data)
    }



    axiosGetResponse(key, id = null, showLoader = false, showError = true, contentType = 'application/json') {
        return this.httpResponse('get', key, {}, id, showLoader, showError, contentType);
    }

    axiosPostResponse(key, data, id = null, showLoader = false, showError = true, contentType = 'application/json') {
        return this.httpResponse('post', key, data, id, showLoader, showError, contentType);
    }


    axiosPatchResponse(key, data, id = null, showloader = false, showError = true, contenttype = 'application/json') {
        return this.httpResponse('patch', key, data, id, showloader, showError, contenttype);
    }

    axiosDeleteResponse(key, id = null, showloader = false, showError = true, contentType = 'application/json') {
        return this.httpResponse('delete', key, {}, id, showloader, showError, contentType);
    }




    httpResponse(type = 'get', key, data, id = null, showLoader = false, showError = true, contentType = 'application/json') {

        return new Promise((resolve) => {

            if (showLoader == true) {
                utilityService.showLoader();
            }

            const _id = (id) ? '/' + id : '';
            const url = key + _id;

            let headers = {
                'content-type': contentType,
            }

            const seq = (type == 'get') ? apiService.get(url) : ((type == 'patch') ? apiService.patch(url, data) : ((type == 'delete') ? apiService.delete(url) : apiService.post(url, data, headers)));

            seq.then((res) => {
                if (res.status != 200) {
                    if (showError == true) {
                        if (res.status != 401) {
                            utilityService.presentFailureToast(res['message']);
                        }
                    }

                    if (res.status == 401) {
                        // redirect it to login page
                        this.$router.push({ path: 'login', query: {} });

                    }

                    resolve(null);
                    return;
                }

                resolve(res.data);


            }, (err) => {

                let error = err;

                if (showLoader == true) {
                    utilityService.hideLoader();
                }

                if (showError == true) {
                    if (err.status != 401) {
                        utilityService.presentFailureToast(err['message']);
                    }
                }

                if (err.status == 401) {
                    // redirect it to login page

                    this.$router.push({ path: '/', query: {} });
                }

                resolve(err);

            }).catch((err) => {
                console.log(err, "CATCH FROM NETWORK");
            })

        });

    }
}
