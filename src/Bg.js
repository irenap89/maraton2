import './Bg.css';

import { useState } from "react";

function Bg() {

  const [display_no_bg_tab, setdisplay_no_bg_tab] = useState("no");



  function change_tab() {
    
    if(display_no_bg_tab=='yes') {
        setdisplay_no_bg_tab('no');
    } else {
        setdisplay_no_bg_tab('yes');
    }
   
  }

  return (
    <div className="Bg">
     <div className="header">
        <span className='header_text'> העלאת תמונה כדי להסיר את הרקע </span>
        <button className="header_btn"> העלאת תמונה</button>
        <span className="header_subtext"> פורמטים נתמכים png, jpeg</span>
     </div>

    <div className="main_div">

 

      <div className="left_div"> 

      <div className='main_div_tabs_header' >
          <span onClick={change_tab} className='no_bg'> הסר רקע</span>
          <span onClick={change_tab} className='original'> מקורי </span>
      </div>


      {display_no_bg_tab=="yes" ?  
          <div className="original_tab" >
            original_tab
          </div>
      :
          <div className="no_bg_tab">
            no_bg_tab
          </div>
      }
      
      </div>

      <div className="right_div">
        <div className="right_div_middle_div">

          <div className="right_div_top">
              <div className="right_div_top_text"> תמונה חינם </div>
              <div className="right_div_top_subtext">  612x408 תצוגה מקדימה של תמונה </div>
              <button className="right_div_top_btn"> הורד </button>
              <div className="right_div_top_sub_sub_text"> איכות טובה עד 0.25 מגה פיקסל </div>
          </div>

          <div className="right_div_bottom">
              <div className="right_div_bottom_text">Pro</div>
              <div className="right_div_bottom_subtext">  תמונה מלאה 1280x1920
              </div>
              <button className="right_div_top_btn">HD הורד </button>
              <div className="right_div_top_sub_sub_text"> האיכות הטובה ביותר עד 25 מגה פיקסל</div>

          </div>

        </div>
      </div>

    </div>

    </div>
  );
}

export default Bg;
