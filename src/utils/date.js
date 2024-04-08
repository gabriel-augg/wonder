import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale"

export default function timeAgo(data){
    const date = formatDistanceToNowStrict(new Date(data), { locale: ptBR })
    return date
}

