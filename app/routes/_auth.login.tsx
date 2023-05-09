import invariant from 'tiny-invariant';
import { json } from '@remix-run/node';
import type {
    ActionArgs
} from '@remix-run/node';
import type { V2_MetaFunction } from "@remix-run/react";
import type { EmailPasswordCredential } from '~/utils/session.server';
import { createUserSession, isAuthError } from '~/utils/session.server';
import { signIn } from '~/utils/session.server';
import SignIn from '~/components/login/signin';
import type { User } from 'firebase/auth';
import type { TypedDictionary } from '~/utils/common.type';
import { normalizeError } from '~/utils/common.utils';

// import portfolio from "~/styles/routes/portfolio.css"

export const meta: V2_MetaFunction = () => {
    return [{ title: "Remix App | Hands On - Login" }]
}

// export let links: LinksFunction = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: portfolio,
//     },
//   ]
// }

// export let loader = async ({ request }: LoaderArgs) => {
//     const userId = await getUserId(request);
//     if (userId) return redirect("/");
// }

export let action = async ({ request }: ActionArgs) => {
    let formData = await request.formData()

    let email = formData.get("email")
    let password = formData.get("password")

    let errors: TypedDictionary = {
        email: email ? null : "Email is required",
        password: password ? null : "Password is required",
    }

    const hasErrors =
        Object.values(errors).some((errorMessage) => errorMessage)

    if (hasErrors)
        return json({
            errorCode: "auth/field-validation-failed",
            errorMessage: "Login Form Error",
            errorFields: [...await normalizeError(errors)]
        })

    invariant(typeof email === "string", "Email must be a string")
    invariant(typeof password === "string", "Password must be a string")

    let credential: EmailPasswordCredential = {
        email, password
    }

    let user = await signIn(credential)
    if (isAuthError(user))
        return user
    else {
        const { uid } = user as User;
        return await createUserSession(uid, "/");
    }
}

export default function Login() {
    return (
        <SignIn />
    )
}


