import { FadeLoader } from "react-spinners";
import css from './loading.module.css';

export default function Loader() {
    return <div className={css.fade}>{<FadeLoader height={20} color="#6de422"/>}</div>
}