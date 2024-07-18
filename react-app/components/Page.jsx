export function Page(){
    return (
        <div className="profile">
            <img src="Rectangle 90.png" alt="" />
            <h1 className="name">Laura Smith</h1>
            <p className="profession">Front End Developer</p>
            <a href="#" className="link">laurasmith.website</a>
            <div className="btn">
                <button className="socials">
                    <span className="links">

                <i class="fa fa-envelope" aria-hidden="true"></i>
                    Email
                    </span>
                    </button>
                <button className="social">
                <span className="links"><i class="fa fa-linkedin" aria-hidden="true"></i>
                    LinkedIn
                </span>
                    </button>
            </div>
        </div>
        
    )
}