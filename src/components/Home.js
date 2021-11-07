import HomeCSS from "./Home.module.css";

const Home = () => {
    return (
        <div className={HomeCSS.home}>
            <ul>
                <li id={HomeCSS.info_here}>
                    <h1>Home Cook</h1>
                    <p className={HomeCSS.info}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil quas voluptatem non vitae odio ut cum nostrum fuga deleniti praesentium soluta reprehenderit quibusdam, optio consectetur! Eos voluptates dolorum expedita quibusdam fugit laborum accusantium minus harum nulla odio, soluta asperiores quasi similique, velit, architecto optio error ipsa maiores recusandae! Cum sint aliquid voluptate debitis excepturi ad ullam asperiores blanditiis laboriosam.
                    </p>
                </li>
                <li>
                    <div className={HomeCSS.buttons_role}>
                        <h2>Who are you?</h2>
                        <button className={HomeCSS.role} id={HomeCSS.cook}>Cook</button>
                        <button className={HomeCSS.role} id={HomeCSS.customer}>Customer</button>
                    </div>
                </li> 
            </ul>
        </div>
    );
}

export default Home;