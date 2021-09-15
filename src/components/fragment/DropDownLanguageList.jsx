import React, {useContext, useState} from "react";
import '../assets/scss/DropDown.scss';
import Button from "@material-ui/core/Button";
import LangList from "./LangList";
import {ThemeContext} from "../../api/Theme";
import {useDispatch} from "react-redux";
import {setMusicLang} from "../../actions/actions";

const DropDownLanguageList = () => {

    const useStyle = useContext(ThemeContext);

    const listOfLanguage = [
        "All",
        "E1",
        "E2",
        "E3",
        "E4",
        "E5",
        "E6",
        "English",
    ];
    const [selectedList, setSelectedList] = useState({
        "All": false,
        "E1": false,
        "E2": false,
        "E3": false,
        "E4": false,
        "E5": false,
        "E6": false,
        "English": false,
    });
    const handleSelected = (val, selected) => {
        setSelectedList(prevState => {
            return {
                ...prevState,
                [val]: selected
            };
        });
    };
    const dispatch = useDispatch();
    const handleLangSelect = (e) => {
        e.preventDefault();
        let list = [];
        for (let i in selectedList) {
            if (selectedList[i] === true)
                list.push(i.toLowerCase());
        }
        dispatch(setMusicLang(list));
    };


    return (
        <div style={useStyle.component} className="dropdown">
            <div className="dropdown-head">
                <p>Pick the level of class you want to listen to</p>
            </div>
            <div className={"lang-list"}>
                {listOfLanguage.map((item) => {
                    return (
                        <LangList onClick={handleSelected} key={item} item={item}/>
                    );
                })}
            </div>
            <div className={"button-div"}>
                <Button onClick={handleLangSelect} style={useStyle.button.contained}>
                    Update
                </Button>
            </div>
        </div>
    );
}
export default DropDownLanguageList;