import React, { useState } from 'react';
import './Cards.scss'

const Cards = (props) =>{
    const[like, updated] = useState("Like");
    const[increase, decrease] = useState(props.data.likes);
    const[comment, newComment] = useState("");
    const[post, poComment] = useState([]);
    let data = props.data;

    const changeLikeByUnlike = () =>{
        updated((oldValue)=>{
            if(oldValue == "Like"){
                decrease((oldValue)=>{
                    return increase+1;
                })
                return "Unlike"
            }
            
            else {
                decrease((oldValue)=>{
                    return increase-1;
                })
                return "Like"
            }
        }
        );

    }

    const addComment = (e) =>{
        newComment(e.target.value);
    }
    const postComment =()=>{
        if(comment == "") return;
        poComment((oldValue)=>{
            return [comment, ...oldValue]
        });
        newComment("");
    }


    return(
        <>
        <div className="card_wrapper">
            <img className="card_img" src={data.url} />
            <div className="card_footer">
                <div className="first_column"> 
                    <span className="like">{increase}</span>
                    <a className="like-text" onClick={changeLikeByUnlike}>{like}</a>
                    <span className="category">{data.category}</span>
                </div>
                <div className="second_column">
                    <input className="input_comment" placeholder="Type your comment here..." onChange={addComment} value={comment}></input>
                    <span className="post" onClick={postComment}>POST</span>
                </div>
                <div className="third_column">
                    {post.map((index)=>{
                        return <div className="comment-text">{index}</div>
                    })}
                    {data.comments.map((index)=>{
                        return(<div className="comment-text">{index}</div>)
                    })}
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;