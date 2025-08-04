import Link from "next/link";


export default function User({displayName, email, phoneNumber, country, uid}) {

  return (
    <Link href={`/userProfile/${uid}`} className={`grid grid-cols-4 p-3 text-sm font-[200] max-xsm:text-[11px] userHov`}>
      <div>{displayName}</div>
      <a className="text-[#ffb347]" href={"mailto:" + email + "?subject=" + encodeURIComponent("Update from coingrow") + "&body=" + encodeURIComponent("Hi"+displayName)}>{email}</a>
     <div>{phoneNumber}</div>
     <div>{country}</div>
    </Link>
  )
}