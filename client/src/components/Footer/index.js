import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return(
    <footer class="page-footer" style={{backgroundColor: "#260688"}}>
          
          <div class="center">
            ETN Technics
            <div class="container center">
              <div>
                <Link to="/contact" style={{ color: "#FFF"}}>Contact</Link>
                </div>
              <div>
                <Link to="/products" style={{ color: "#FFF"}}>Products</Link>
                </div>
            © 2021 Copyright Text
            </div>
          </div>
        </footer>
  );
}

export default Footer;