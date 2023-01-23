import '../css/Menubar.css';

function Menubar() {
    return (
        <div class="menu-bar">

            <div class="menu-bar-container">

                <div class="menu-bar-items">

                    <div class="menu-bar-item menu-bar-item-start">
                        <div class="menu-start">
                            <div class="table">
                                <div class="table-cell middle">
                                    <div class="start-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="menu-bar-item menu-bar-item-programs">
                        <div class="menu-programs">
                            <div class="menu-program">
                                <div class="menu-program-container">
                                    {/*Tämä muodostuu ohjelman avautuessa  */}
                                    <div class="program-icon">
                                        <div class="program-icon-img"></div>
                                    </div>

                                    <div class="program-label">
                                        <span>Esimerkki</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="menu-bar-item menu-bar-item-tasks">
                        <div class="menu-bar-tasks">
                            <div class="menu-bar-task-items"></div>
                            <div class="menu-bar-clock">
                                <div class="table">
                                    {/* Kellon aika koodilla */}
                                    <div class="table-cell middle">17:13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Menubar;