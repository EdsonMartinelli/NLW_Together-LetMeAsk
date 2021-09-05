import '../styles/question.scss';
import { ReactNode} from 'react';

type QuestionsProps = {
    content: string,
    author:{
        name: string,
        avatar: string
    },
    children?: ReactNode,
    isHighlighted?: boolean,
    isAnswered?: boolean
}

export function Question({isHighlighted = false, isAnswered = false, ...props}: QuestionsProps){
    return(
        <div className={`question ${isAnswered ? 'answered' : '' } ${isHighlighted && !isAnswered ? 'highlighted' : '' }`}>
            <p>{props.content}</p>
            <footer>
                <div className="user-info">
                    <img src={props.author.avatar} alt={props.author.name}/>
                    <span>{props.author.name}</span>
                </div>
                <div>
                    {props.children}
                </div>
            </footer>
        </div>
    );
}