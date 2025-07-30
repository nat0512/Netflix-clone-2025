
 
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
function Footer() {
 
  


  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="footer-icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift cards</li>
                <li>Terms of use</li>
                <li>Corporate information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service-code">
            <p>Service code</p>
          </div>
          <div className="copy-write">© 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;


