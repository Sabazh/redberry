import { useContext, useState } from 'react'
import { AppContext } from '@/context/AppContext'
import { fetchData } from '@/utils/fetchData'
import Button from '@/components/Inputs/Button/Button'


const Login = () => {
  const { loginHandler, isLoggedIn, isLoggedInHandler, setTokenHandler, token} =
    useContext(AppContext)

  const [mail, setMail] = useState('')
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setMail(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const payload = { email: mail }
    try {
      await fetchData('login', {
        method: 'post',
        body: JSON.stringify(payload),
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      // const blogs = await fetchData('blogs', {
      //   method: 'get',
      //   cache: 'no-store',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     accept: 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      // save token in App context
      setTokenHandler(token)
      isLoggedInHandler()
    } catch (e) {
      console.log('error', JSON.parse(e.message))
    }
  }

  return (
    <div className="flex w-full h-full fixed top-0 left-0 justify-center items-center bg-dark/[0.24] z-2">
      <div className="max-w-[480px] w-full bg-white rounded-1-2 px-2-4 py-4-0 relative">
        <button
          className="absolute top-2-0 right-2-0"
          onClick={() => loginHandler(false)}
        >
          <img src="/svg/X.svg" />
        </button>
        {isLoggedIn ? (
          <div className="flex flex-col gap-4-8">
            <div className="flex flex-col items-center justify-center gap-1-6 px-7-4">
              <img src="/svg/tick-circle.svg" className="w-6-4" />
              <p className="font-fB text-2-0 text-dark">
                წარმატებული ავტორიზაცია
              </p>
            </div>
            <Button color="blue" onClick={() => loginHandler(false)}>
              კარგი
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-2-4">
            <h1 className="flex items-center justify-center text-2-4 font-fB text-dark">
              შესვლა
            </h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-2-4">
              <div className="flex flex-col gap-0-8">
                <label className="text-1-4 font-fR text-dark">ელ-ფოსტა</label>
                <input
                  value={mail}
                  name="mail"
                  placeholder="Example@redberry.ge"
                  onChange={onChange}
                  className="px-1-6 py-1-2 w-full bg-white02 rounded-1-2 border-solid border-0-1.5 border-blue outline-none text-1-4 font-fR text-dark placeholder:text-grey"
                />
                {error && (
                  <div className="flex gap-0-8">
                    <img src="/svg/red-!.svg" />
                    <span className="font-fR text-1-2 text-red">
                      ელ-ფოსტა არ მოიძებნა
                    </span>
                  </div>
                )}
              </div>
              <Button color="blue">შესვლა</Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
