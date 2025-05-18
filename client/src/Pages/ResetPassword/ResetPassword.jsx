import './ResetPassword.css'

const ResetPassword = () => {
    return (
        <>
            <div className="reset-password">
                <div className='container'>
                    <div className='forms mt-5'>
                        <div className='form resetpassword'>
                            <span className='title'>Reset-Password</span>

                            <form>
                                <div className='input-field'>
                                    <input type="email" placeholder='Enter your email' required />
                                    <i className='uil uil-envelope icon'></i>
                                </div>

                                <div className='button input-field'>
                                    <input type="submit" value="Send OTP" />
                                </div>



                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetPassword;