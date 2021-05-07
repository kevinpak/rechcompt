import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <Link href="/" >
        <a className="logoLink">
          <img src="/images/svg/RechCompt-logo.svg" alt="logo"/>
        </a>
      </Link>
      <style jsx>
        {`
          .logoLink::after {
            content: "";
            position: absolute;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ff6f00;
            right: -12px;
            bottom: 1px;
          }
        `}
      </style>
    </>
  )
}

export default Logo