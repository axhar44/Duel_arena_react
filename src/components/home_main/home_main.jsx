export default function HomeMain() {
    return (
        <div className="content">
            <div className="row">
                <div className="col-4">
                    <div className="card_2 ">
                        <div className="card-header_daily_race">
                            <div className="row">
                                <div className="col-sm-6 text-white">Daily Race</div>
                                <div className="col-sm-6 text-right text-white">00:12:34</div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-6 text-white">Total Bounty</div>
                                <div className="col-sm-6 text-right text-white">Your Rank</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6 total_bounty"><span><img src="assets/icons/coin.png" /></span>&nbsp;&nbsp;10000</div>
                                <div className="col-sm-6 text-right daily_race_rank">1,021</div>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="card card-chart">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-sm-6 text-white">Weekly Race</div>
                                <div className="col-sm-6 text-right">37:12:34</div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-6 text-white">Total Bounty</div>
                                <div className="col-sm-6 text-right">Your Rank</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6 total_bounty"><span><img src="assets/icons/coin.png" /></span>&nbsp;&nbsp;1000000</div>
                                <div className="col-sm-6 text-right daily_race_rank_yellow">1,021</div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="col-8">
                    <div className="card_blank card-chart-big">
                        {/* <div className>
                           <h5 class="card-category">Daily Sales</h5>
      <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info"></i> 3,500€</h3> 
                        </div> */}
                        <div className="card-body">
                            <div className="chart-area">
                                <canvas id="CountryChart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <img src="assets/img/Frame1.png" className="pokeimage" />
                    <p className="shade_dual_arena">aa</p>
                </div>
                <div className="col-sm-6 ">
                    <img src="assets/img/Frame2.png" className="pokeimage" />
                    <p className="shade_poker">aa</p>
                </div>
            </div>
        </div>
    );
}