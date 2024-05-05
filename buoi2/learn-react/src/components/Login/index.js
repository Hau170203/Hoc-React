function Login() {
    const isLogin = false;
    return (
        <>
        {/* Trường hợp đúng sai */}
            {isLogin ? (
                <>
                    <div>Thông tin người dùng</div>
                </>
            ) : (<>
                <div>
                    Đăng nhập đăng ký
                </div>
            </>)
            }

        {/* Trường hợp chỉ lấy đúng  */}

            {isLogin && (
                <>
                    <div>Thông tin người dùng</div>
                </>
            )}
        </>

    );
}

export default Login;