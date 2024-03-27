import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale"

export default function timeAgo(data){
    const date = formatDistanceToNow(new Date(data), { addSuffix: true, locale: ptBR })
    return date
}