

const FAQ = () => {
    return (
        <div className="text-base-content py-20 container mx-auto flex flex-col gap-y-3 ">
            <>
                <div className="ps-2 text-3xl font-semibold mb-1">FAQ</div>

                <div
                    tabIndex={0}
                    className="collapse collapse-plus bg-base-100 border-base-300 border"
                >
                    <div className="collapse-title font-semibold">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="collapse-content text-sm/6">
                        consectetur adipisicing elit. Perspiciatis iste, atque est quo, dignissimos quidem fugit culpa molestiae unde velit, delectus amet consequatur beatae! Nam dicta numquam minima veritatis pariatur.
                    </div>
                </div>

                <div
                    tabIndex={0}
                    className="collapse collapse-plus bg-base-100 border-base-300 border"
                >
                    <div className="collapse-title font-semibold">
                        What if  Lorem ipsum dolor sit amet
                    </div>
                    <div className="collapse-content text-sm/6">
                        dignissimos quidem fugit culpa molestiae unde velit, delectus amet consequatur beatae! Nam dicta numquam minima veritatis pariatur.
                    </div>
                </div>

                <div
                    tabIndex={0}
                    className="collapse collapse-plus bg-base-100 border-base-300 border"
                >
                    <div className="collapse-title font-semibold">
                        What if  Lorem ipsum dolor sit amet
                    </div>
                    <div className="collapse-content text-sm/6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem accusantium rem fuga atque recusandae earum aspernatur odio doloribus ullam molestias, dolor, consectetur tempore eum dolorum cupiditate laborum iusto nemo.
                    </div>
                </div>



            </ >
        </div >
    );
};

export default FAQ;
