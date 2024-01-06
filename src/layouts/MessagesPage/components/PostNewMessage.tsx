import {useOktaAuth} from "@okta/okta-react";
import {useState} from "react";
import MessageModel from "../../../models/MessageModel";

export const PostNewMessage = ()=>{
    const {authState} = useOktaAuth();
    const [ httpError, setHttpError] = useState(null);
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);


    async function submitNewQuestion(){
        const url = `${process.env.REACT_APP_API}/messages/secure/add/message`;
        if(authState?.isAuthenticated && title !== '' && question !== ''){
            const messageRequestModel: MessageModel = new MessageModel(title, question);
            const requestOptions = {
                method:"POST",
                headers:{
                    Authorization: `Bearer ${authState.accessToken?.accessToken}`,
                    'Content-Type': `application/json`
                },
                body: JSON.stringify(messageRequestModel)
            };
            const submitNewQuestionResponse = await fetch(url, requestOptions);
            if(!submitNewQuestionResponse.ok){
                throw new Error("something went wrong in submitNewQuestion");
            }
            setTitle('');
            setQuestion('');
            setDisplayWarning(false);
            setDisplaySuccess(true);
        } else{
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }

    }

    return(
      <div className={"card mt-3"}>
          {displaySuccess &&
              <div className={"alert alert-success"} role={"alert"}>
                Question Added Successfully
              </div>
          }
          <div className={"card-header"}>
              Ask Question to Luv 2 Read Admin
          </div>
          <div className={"card-body"}>
              <form method={"POST"}>
                  {displayWarning &&
                    <div className={"alert alert-danger"} role={"alert"}>
                      All fields must be filled out
                    </div>
                  }
                  <div className={"mb-3"}>
                      <label className={'form-label'}>Title</label>
                      <input type={"text"} className={"form-control "} id={'exampleFormControllInput1'}
                             placeholder={"Title"} onChange={e=>setTitle(e.target.value)}
                             value={title}/>
                  </div>
                  <div className={'mb-3'}>
                      <label className={'form-label'}>
                          Question
                      </label>
                      <textarea className={"form-control"} id={"exampleFormControlTextArea1"}
                                rows={3} onChange={e=>setQuestion(e.target.value)}
                                value={question}/>
                  </div>
                  <div>
                      <button type={'button'} className={"btn btn-primary mt-3"}
                        onClick={()=>submitNewQuestion()}
                      >
                          Submit Question
                      </button>
                  </div>
              </form>
          </div>

      </div>
    );
}