import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <header>
            <div className="header-wrapper bg-gray-50">
                <div className="container  flex justify-between mx-auto p-3">
                    <h1 className="text-4xl">Knowledge Cafe</h1>
                    <div>
                        <img
                            className="w-10"
                            src={profile}
                            alt="header profile"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
