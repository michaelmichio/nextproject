import { authPage } from "@/middlewares/authorizationPage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export async function getServerSideProps(ctx) {
    const { token } = await authPage(ctx);
    
    return {
        props: {
            token
        }
    }
}

function parseJwt(token) {
    if (typeof window !== 'undefined') {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
}

export default function LaporanIndex(props) {

    const { token } = props;

    console.log(parseJwt(token));

    return (

        <div>
            <Navbar />
            <Sidebar currentPage={'laporan'} />
        </div>

    );

}