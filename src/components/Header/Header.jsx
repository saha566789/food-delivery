import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Order your favorite food here</h2>
                <p>Relaxed atmosphere with a diverse menu offering a range of dishes, typically served at moderate prices.Quick-service restaurants offering standardized menu items with efficient service.</p>
                <button>ViewMenu</button>
            </div>
        </div>
    );
};

export default Header;