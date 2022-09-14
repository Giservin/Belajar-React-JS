import { useParams } from 'react-router-dom';

export default function BlogDetail() {
    const urlParams = useParams();
    return (<>
                <h1>Blog detail</h1>
                <p>isi detail artikel {urlParams.slug}</p>
            </>);
}