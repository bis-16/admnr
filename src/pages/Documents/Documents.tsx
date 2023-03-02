import React from 'react';
import doc from "../../assets/img/document.svg";
import s0 from "../../App.module.scss";

const Documents = () => {
  return (
    <div className={s0.wrapper__docs}>


      <a href={process.env.PUBLIC_URL + '/docs/shablon_site_2023.docx'} className={s0.doc}>
        <img src={doc} className={s0.img} alt="Документ"/>
        <div>Заявка на размещение информации на сайт администрации Новосибирского района</div>
      </a>

      <a href={process.env.PUBLIC_URL + '/docs/cert_anketa.docx'} className={s0.doc}>
        <img src={doc} className={s0.img} alt="Документ"/>
        <div>Анкета на получение ЭЦП</div>
      </a>

      <a href={process.env.PUBLIC_URL + '/docs/Договор_ответственного_хранения.docx'} className={s0.doc}>
        <img src={doc} className={s0.img} alt="Документ"/>
        <div>Договор ответственного хранения</div>
      </a>

    </div>
  );
};

export default Documents;