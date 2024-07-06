import {Language} from "@codeium/react-code-editor";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    // In `next dev` and `next build`, `Language.C` causes the following error:
    // `Error: Cannot access Language.C on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.`
    console.log(Language.C);
    return (
        <>Home</>
    )
}
