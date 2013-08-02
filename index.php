
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>wolkenkraft.com Responsive Menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Load stylesheet -->
    <link href="assets/css/wolkenkraft-rwd-menu.css" rel="stylesheet">

</head>

        <nav class="wolkenkraft-rwd-navbar">

            <div class="responsive-buttons">
                <button type="button" class="btn" data-toggle="collapse" data-target=".wolkenkraft-rwd-menu"><span data-icon="&#xe000;" aria-hidden="true"></span></button>
                <button type="button" class="btn" data-toggle="collapse" data-target=".wolkenkraft-rwd-menu-account"><span data-icon="&#xe003;" aria-hidden="true"></span></button>
            </div>

            <!-- The main navigation -->
            <div class="wolkenkraft-rwd-menu collapse-element">
                <ul>
                    <li>
                        <a href="#">Categories</a>
                        <ul>
                            <li><a href="#">TV & Video</a></li>
                            <li>
                                <a href="#">Audio</a>
                                <ul>
                                    <li><a href="#">Car HiFi</a></li>
                                    <li><a href="#">Surround Sound</a></li>
                                    <li><a href="#">Home Cinema</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Cameras & Surveillance</a></li>
                            <li><a href="#">Car & GPS</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Shopping Cart</a>
                    </li>
                    <li>
                        <a href="#">Notepad</a>
                        <ul>
                            <li><a href="#">Favorites</a></li>
                            <li><a href="#">My Wishlist</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Checkout</a>
                    </li>
                </ul>
            </div>
            <!-- /The main navigation -->

            <div class="wolkenkraft-rwd-menu-account collapse-element">
                <ul>
                    <li>
                        <a href="#">My Account</a>
                        <ul>
                            <li><a href="#">My Settings</a></li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Change Password</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </li>

                </ul>
            </div>





        </nav>



<!-- Load JS here for faster page loading time =============================-->
<script src="assets/js/jquery-1.8.3.min.js"></script>
<script src="assets/js/wolkenkraft-rwd-navbar.js"></script>
<script type="text/javascript">$(".wolkenkraft-rwd-navbar").rwdNav();</script>


</body>
</html>