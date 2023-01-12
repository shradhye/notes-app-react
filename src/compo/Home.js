function home(){
    return(
        <>
            <div className="container border m-5 p-5">
                <div className="row shadow-sm">
                    <h2>Practice</h2>
                </div>
                <div className="row p-5">
                <h4>JavaScript Variables</h4>
                <p>Theory Data</p>
                <div className="col-6 border">
                    <p className="btn">Questions</p>
                    <ul>
                        <li></li>
                        <li>Q2</li>
                        <li>Q3</li>
                    </ul>
                </div>
                <div className="col-6 border">
                    <p className="btn">Answers</p>
                    <ul>
                        <li>Answer1</li>
                        <li>Answer2</li>
                        <li>Answer3</li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}
export default home;