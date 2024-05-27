import React, {useContext, useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
import {LOADING_STATUS} from "../../store/storeUtils";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const EmailConfirm = observer(() => {
    const {user} = useContext(Context);
    const {key} = useParams();

    useEffect(() => {
        const sendKey = async () => {
            try {
                await user.sendKey(key);
            } catch (err) {
                console.log(err);
            }
        }
        sendKey();
    }, []);

    return (
        <div>
            {
                user.keySendingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                user.keySendingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                user.keySendingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                user.keySendingStatus === LOADING_STATUS.SUCCESS &&
                user.key &&
                <div>
                    <center>
                        <h1>Аккаунт подтвержден!</h1>
                        <br/>
                        <p>Войдите в аккаунт <NavLink to={LOGIN_ROUTE} className={'nav__link'} style={{fontWeight: 'bold', color: 'blue'}}>здесь</NavLink></p>
                    </center>
                </div>
            }

        </div>
    );
});

export default EmailConfirm;