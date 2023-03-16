import React from "react";
import "./Company.css";
import Fade from 'react-reveal/Fade';

export default function Company() {
  return (
    <div className="container repository">
      <div className="first-item text-light">
      <Fade left>
        <span className="h1">Kompaniya haqida</span>
        </Fade>
        <p className="x-name">
        <Fade left>
          Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion
          echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik.
          Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni
          taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali
          veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
          </Fade>
        </p>

        <p className="x-name">
        <Fade left>
          Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO
          optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z
          ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi
          texnologiyalar va innovatsion usullardan foydalangan holda brendni
          rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.
          </Fade>
        </p>
      </div>
      <div className="secondly-item">
      <Fade right cascade>
        <div className="inf-camp">
          <span className="d-block  number-inf">20+</span>
          <span>Проектов запустил</span>
        </div>
        <div className="inf-camp">
          <span className="d-block  number-inf">4 года</span>
          <span>Опыта разработки</span>
        </div>
        <div className="inf-camp">
          <span className="d-block  number-inf">12+</span>
          <span>Профессионалов</span>
        </div>
        <div className="inf-camp">
          <span className="d-block  number-inf">4 года</span>
          <span>Опыта разработки</span>
        </div>
        </Fade>
      </div>
    </div>
  );
}
