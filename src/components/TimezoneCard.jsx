"use strict";
import React, { useRef, useState } from "react";
import axios from "axios";

const TimezoneCard = () => {
  //Currency logic start here

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [convertedTime, setConvertedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = `http://localhost:8080/tools/currency/to=${to}&from=${from}&value=${time}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const convertedTime = response.data;
        setConvertedTime(convertedTime);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative flex h-96 w-52 lg:h-90 lg:w-80 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#080808] to-[#040404] px-8 py-16 shadow-sm shadow-[#ee2400]">
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
      <div className="flex flex-col align-baseline justify-between w-full">
        <h2 className="text-center pb-2 text-[#ee2400]">Timezone Converter</h2>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-2 text-white">From</h2>
          <div className="flex justify-center text-white">
            <select
              name="from"
              id="from"
              className="text-center w-11/12 sm:w-full text-sm sm:text-base p-1 appearance-none bg-black border hover:border-[#ee2400] cursor-pointer"
              onChange={handleFromChange}
              required={true}
            >
              <option value="default">--Select--</option>
              <option value="Etc/GMT+12">Etc/GMT+12 (UTC-12:00)</option>
              <option value="Pacific/Pago_Pago">
                Pacific/Pago_Pago (UTC-11:00)
              </option>
              <option value="Pacific/Samoa">Pacific/Samoa (UTC-11:00)</option>
              <option value="Pacific/Niue">Pacific/Niue (UTC-11:00)</option>
              <option value="US/Samoa">US/Samoa (UTC-11:00)</option>
              <option value="Etc/GMT+11">Etc/GMT+11 (UTC-11:00)</option>
              <option value="Pacific/Midway">Pacific/Midway (UTC-11:00)</option>
              <option value="Pacific/Honolulu">
                Pacific/Honolulu (UTC-10:00)
              </option>
              <option value="Pacific/Rarotonga">
                Pacific/Rarotonga (UTC-10:00)
              </option>
              <option value="Pacific/Tahiti">Pacific/Tahiti (UTC-10:00)</option>
              <option value="Pacific/Johnston">
                Pacific/Johnston (UTC-10:00)
              </option>
              <option value="US/Hawaii">US/Hawaii (UTC-10:00)</option>
              <option value="SystemV/HST10">SystemV/HST10 (UTC-10:00)</option>
              <option value="Etc/GMT+10">Etc/GMT+10 (UTC-10:00)</option>
              <option value="Pacific/Marquesas">
                Pacific/Marquesas (UTC-09:30)
              </option>
              <option value="Etc/GMT+9">Etc/GMT+9 (UTC-09:00)</option>
              <option value="Pacific/Gambier">
                Pacific/Gambier (UTC-09:00)
              </option>
              <option value="America/Atka">America/Atka (UTC-09:00)</option>
              <option value="SystemV/YST9">SystemV/YST9 (UTC-09:00)</option>
              <option value="America/Adak">America/Adak (UTC-09:00)</option>
              <option value="US/Aleutian">US/Aleutian (UTC-09:00)</option>
              <option value="Etc/GMT+8">Etc/GMT+8 (UTC-08:00)</option>
              <option value="US/Alaska">US/Alaska (UTC-08:00)</option>
              <option value="America/Juneau">America/Juneau (UTC-08:00)</option>
              <option value="America/Metlakatla">
                America/Metlakatla (UTC-08:00)
              </option>
              <option value="America/Yakutat">
                America/Yakutat (UTC-08:00)
              </option>
              <option value="Pacific/Pitcairn">
                Pacific/Pitcairn (UTC-08:00)
              </option>
              <option value="America/Sitka">America/Sitka (UTC-08:00)</option>
              <option value="America/Anchorage">
                America/Anchorage (UTC-08:00)
              </option>
              <option value="SystemV/PST8">SystemV/PST8 (UTC-08:00)</option>
              <option value="America/Nome">America/Nome (UTC-08:00)</option>
              <option value="SystemV/YST9YDT">
                SystemV/YST9YDT (UTC-08:00)
              </option>
              <option value="Canada/Yukon">Canada/Yukon (UTC-07:00)</option>
              <option value="US/Pacific-New">US/Pacific-New (UTC-07:00)</option>
              <option value="Etc/GMT+7">Etc/GMT+7 (UTC-07:00)</option>
              <option value="US/Arizona">US/Arizona (UTC-07:00)</option>
              <option value="America/Dawson_Creek">
                America/Dawson_Creek (UTC-07:00)
              </option>
              <option value="Canada/Pacific">Canada/Pacific (UTC-07:00)</option>
              <option value="PST8PDT">PST8PDT (UTC-07:00)</option>
              <option value="SystemV/MST7">SystemV/MST7 (UTC-07:00)</option>
              <option value="America/Dawson">America/Dawson (UTC-07:00)</option>
              <option value="Mexico/BajaNorte">
                Mexico/BajaNorte (UTC-07:00)
              </option>
              <option value="America/Tijuana">
                America/Tijuana (UTC-07:00)
              </option>
              <option value="America/Creston">
                America/Creston (UTC-07:00)
              </option>
              <option value="America/Hermosillo">
                America/Hermosillo (UTC-07:00)
              </option>
              <option value="America/Santa_Isabel">
                America/Santa_Isabel (UTC-07:00)
              </option>
              <option value="America/Vancouver">
                America/Vancouver (UTC-07:00)
              </option>
              <option value="America/Ensenada">
                America/Ensenada (UTC-07:00)
              </option>
              <option value="America/Phoenix">
                America/Phoenix (UTC-07:00)
              </option>
              <option value="America/Whitehorse">
                America/Whitehorse (UTC-07:00)
              </option>
              <option value="America/Fort_Nelson">
                America/Fort_Nelson (UTC-07:00)
              </option>
              <option value="SystemV/PST8PDT">
                SystemV/PST8PDT (UTC-07:00)
              </option>
              <option value="America/Los_Angeles">
                America/Los_Angeles (UTC-07:00)
              </option>
              <option value="US/Pacific">US/Pacific (UTC-07:00)</option>
              <option value="America/El_Salvador">
                America/El_Salvador (UTC-06:00)
              </option>
              <option value="America/Guatemala">
                America/Guatemala (UTC-06:00)
              </option>
              <option value="America/Belize">America/Belize (UTC-06:00)</option>
              <option value="America/Managua">
                America/Managua (UTC-06:00)
              </option>
              <option value="America/Tegucigalpa">
                America/Tegucigalpa (UTC-06:00)
              </option>
              <option value="Etc/GMT+6">Etc/GMT+6 (UTC-06:00)</option>
              <option value="Pacific/Easter">Pacific/Easter (UTC-06:00)</option>
              <option value="Mexico/BajaSur">Mexico/BajaSur (UTC-06:00)</option>
              <option value="America/Regina">America/Regina (UTC-06:00)</option>
              <option value="America/Denver">America/Denver (UTC-06:00)</option>
              <option value="Pacific/Galapagos">
                Pacific/Galapagos (UTC-06:00)
              </option>
              <option value="America/Yellowknife">
                America/Yellowknife (UTC-06:00)
              </option>
              <option value="America/Swift_Current">
                America/Swift_Current (UTC-06:00)
              </option>
              <option value="America/Inuvik">America/Inuvik (UTC-06:00)</option>
              <option value="America/Mazatlan">
                America/Mazatlan (UTC-06:00)
              </option>
              <option value="America/Boise">America/Boise (UTC-06:00)</option>
              <option value="America/Costa_Rica">
                America/Costa_Rica (UTC-06:00)
              </option>
              <option value="MST7MDT">MST7MDT (UTC-06:00)</option>
              <option value="SystemV/CST6">SystemV/CST6 (UTC-06:00)</option>
              <option value="America/Chihuahua">
                America/Chihuahua (UTC-06:00)
              </option>
              <option value="America/Ojinaga">
                America/Ojinaga (UTC-06:00)
              </option>
              <option value="Chile/EasterIsland">
                Chile/EasterIsland (UTC-06:00)
              </option>
              <option value="US/Mountain">US/Mountain (UTC-06:00)</option>
              <option value="America/Edmonton">
                America/Edmonton (UTC-06:00)
              </option>
              <option value="Canada/Mountain">
                Canada/Mountain (UTC-06:00)
              </option>
              <option value="America/Cambridge_Bay">
                America/Cambridge_Bay (UTC-06:00)
              </option>
              <option value="Navajo">Navajo (UTC-06:00)</option>
              <option value="SystemV/MST7MDT">
                SystemV/MST7MDT (UTC-06:00)
              </option>
              <option value="Canada/Saskatchewan">
                Canada/Saskatchewan (UTC-06:00)
              </option>
              <option value="America/Shiprock">
                America/Shiprock (UTC-06:00)
              </option>
              <option value="America/Panama">America/Panama (UTC-05:00)</option>
              <option value="America/Chicago">
                America/Chicago (UTC-05:00)
              </option>
              <option value="America/Eirunepe">
                America/Eirunepe (UTC-05:00)
              </option>
              <option value="Etc/GMT+5">Etc/GMT+5 (UTC-05:00)</option>
              <option value="Mexico/General">Mexico/General (UTC-05:00)</option>
              <option value="America/Porto_Acre">
                America/Porto_Acre (UTC-05:00)
              </option>
              <option value="America/Guayaquil">
                America/Guayaquil (UTC-05:00)
              </option>
              <option value="America/Rankin_Inlet">
                America/Rankin_Inlet (UTC-05:00)
              </option>
              <option value="US/Central">US/Central (UTC-05:00)</option>
              <option value="America/Rainy_River">
                America/Rainy_River (UTC-05:00)
              </option>
              <option value="America/Indiana/Knox">
                America/Indiana/Knox (UTC-05:00)
              </option>
              <option value="America/North_Dakota/Beulah">
                America/North_Dakota/Beulah (UTC-05:00)
              </option>
              <option value="America/Monterrey">
                America/Monterrey (UTC-05:00)
              </option>
              <option value="America/Jamaica">
                America/Jamaica (UTC-05:00)
              </option>
              <option value="America/Atikokan">
                America/Atikokan (UTC-05:00)
              </option>
              <option value="America/Coral_Harbour">
                America/Coral_Harbour (UTC-05:00)
              </option>
              <option value="America/North_Dakota/Center">
                America/North_Dakota/Center (UTC-05:00)
              </option>
              <option value="America/Cayman">America/Cayman (UTC-05:00)</option>
              <option value="America/Indiana/Tell_City">
                America/Indiana/Tell_City (UTC-05:00)
              </option>
              <option value="America/Mexico_City">
                America/Mexico_City (UTC-05:00)
              </option>
              <option value="America/Matamoros">
                America/Matamoros (UTC-05:00)
              </option>
              <option value="CST6CDT">CST6CDT (UTC-05:00)</option>
              <option value="America/Knox_IN">
                America/Knox_IN (UTC-05:00)
              </option>
              <option value="America/Bogota">America/Bogota (UTC-05:00)</option>
              <option value="America/Menominee">
                America/Menominee (UTC-05:00)
              </option>
              <option value="America/Resolute">
                America/Resolute (UTC-05:00)
              </option>
              <option value="SystemV/EST5">SystemV/EST5 (UTC-05:00)</option>
              <option value="Canada/Central">Canada/Central (UTC-05:00)</option>
              <option value="Brazil/Acre">Brazil/Acre (UTC-05:00)</option>
              <option value="America/Cancun">America/Cancun (UTC-05:00)</option>
              <option value="America/Lima">America/Lima (UTC-05:00)</option>
              <option value="America/Bahia_Banderas">
                America/Bahia_Banderas (UTC-05:00)
              </option>
              <option value="US/Indiana-Starke">
                US/Indiana-Starke (UTC-05:00)
              </option>
              <option value="America/Rio_Branco">
                America/Rio_Branco (UTC-05:00)
              </option>
              <option value="SystemV/CST6CDT">
                SystemV/CST6CDT (UTC-05:00)
              </option>
              <option value="Jamaica">Jamaica (UTC-05:00)</option>
              <option value="America/Merida">America/Merida (UTC-05:00)</option>
              <option value="America/North_Dakota/New_Salem">
                America/North_Dakota/New_Salem (UTC-05:00)
              </option>
              <option value="America/Winnipeg">
                America/Winnipeg (UTC-05:00)
              </option>
              <option value="America/Cuiaba">America/Cuiaba (UTC-04:00)</option>
              <option value="America/Marigot">
                America/Marigot (UTC-04:00)
              </option>
              <option value="America/Indiana/Petersburg">
                America/Indiana/Petersburg (UTC-04:00)
              </option>
              <option value="Chile/Continental">
                Chile/Continental (UTC-04:00)
              </option>
              <option value="America/Grand_Turk">
                America/Grand_Turk (UTC-04:00)
              </option>
              <option value="Cuba">Cuba (UTC-04:00)</option>
              <option value="Etc/GMT+4">Etc/GMT+4 (UTC-04:00)</option>
              <option value="America/Manaus">America/Manaus (UTC-04:00)</option>
              <option value="America/Fort_Wayne">
                America/Fort_Wayne (UTC-04:00)
              </option>
              <option value="America/St_Thomas">
                America/St_Thomas (UTC-04:00)
              </option>
              <option value="America/Anguilla">
                America/Anguilla (UTC-04:00)
              </option>
              <option value="America/Havana">America/Havana (UTC-04:00)</option>
              <option value="US/Michigan">US/Michigan (UTC-04:00)</option>
              <option value="America/Barbados">
                America/Barbados (UTC-04:00)
              </option>
              <option value="America/Louisville">
                America/Louisville (UTC-04:00)
              </option>
              <option value="America/Curacao">
                America/Curacao (UTC-04:00)
              </option>
              <option value="America/Guyana">America/Guyana (UTC-04:00)</option>
              <option value="America/Martinique">
                America/Martinique (UTC-04:00)
              </option>
              <option value="America/Puerto_Rico">
                America/Puerto_Rico (UTC-04:00)
              </option>
              <option value="America/Port_of_Spain">
                America/Port_of_Spain (UTC-04:00)
              </option>
              <option value="SystemV/AST4">SystemV/AST4 (UTC-04:00)</option>
              <option value="America/Indiana/Vevay">
                America/Indiana/Vevay (UTC-04:00)
              </option>
              <option value="America/Indiana/Vincennes">
                America/Indiana/Vincennes (UTC-04:00)
              </option>
              <option value="America/Kralendijk">
                America/Kralendijk (UTC-04:00)
              </option>
              <option value="America/Antigua">
                America/Antigua (UTC-04:00)
              </option>
              <option value="America/Indianapolis">
                America/Indianapolis (UTC-04:00)
              </option>
              <option value="America/Iqaluit">
                America/Iqaluit (UTC-04:00)
              </option>
              <option value="America/St_Vincent">
                America/St_Vincent (UTC-04:00)
              </option>
              <option value="America/Kentucky/Louisville">
                America/Kentucky/Louisville (UTC-04:00)
              </option>
              <option value="America/Dominica">
                America/Dominica (UTC-04:00)
              </option>
              <option value="America/Asuncion">
                America/Asuncion (UTC-04:00)
              </option>
              <option value="EST5EDT">EST5EDT (UTC-04:00)</option>
              <option value="America/Nassau">America/Nassau (UTC-04:00)</option>
              <option value="America/Kentucky/Monticello">
                America/Kentucky/Monticello (UTC-04:00)
              </option>
              <option value="Brazil/West">Brazil/West (UTC-04:00)</option>
              <option value="America/Aruba">America/Aruba (UTC-04:00)</option>
              <option value="America/Indiana/Indianapolis">
                America/Indiana/Indianapolis (UTC-04:00)
              </option>
              <option value="America/Santiago">
                America/Santiago (UTC-04:00)
              </option>
              <option value="America/La_Paz">America/La_Paz (UTC-04:00)</option>
              <option value="America/Thunder_Bay">
                America/Thunder_Bay (UTC-04:00)
              </option>
              <option value="America/Indiana/Marengo">
                America/Indiana/Marengo (UTC-04:00)
              </option>
              <option value="America/Blanc-Sablon">
                America/Blanc-Sablon (UTC-04:00)
              </option>
              <option value="America/Santo_Domingo">
                America/Santo_Domingo (UTC-04:00)
              </option>
              <option value="US/Eastern">US/Eastern (UTC-04:00)</option>
              <option value="Canada/Eastern">Canada/Eastern (UTC-04:00)</option>
              <option value="America/Port-au-Prince">
                America/Port-au-Prince (UTC-04:00)
              </option>
              <option value="America/St_Barthelemy">
                America/St_Barthelemy (UTC-04:00)
              </option>
              <option value="America/Nipigon">
                America/Nipigon (UTC-04:00)
              </option>
              <option value="US/East-Indiana">
                US/East-Indiana (UTC-04:00)
              </option>
              <option value="America/St_Lucia">
                America/St_Lucia (UTC-04:00)
              </option>
              <option value="America/Montserrat">
                America/Montserrat (UTC-04:00)
              </option>
              <option value="America/Lower_Princes">
                America/Lower_Princes (UTC-04:00)
              </option>
              <option value="America/Detroit">
                America/Detroit (UTC-04:00)
              </option>
              <option value="America/Tortola">
                America/Tortola (UTC-04:00)
              </option>
              <option value="America/Porto_Velho">
                America/Porto_Velho (UTC-04:00)
              </option>
              <option value="America/Campo_Grande">
                America/Campo_Grande (UTC-04:00)
              </option>
              <option value="America/Virgin">America/Virgin (UTC-04:00)</option>
              <option value="America/Pangnirtung">
                America/Pangnirtung (UTC-04:00)
              </option>
              <option value="America/Montreal">
                America/Montreal (UTC-04:00)
              </option>
              <option value="America/Indiana/Winamac">
                America/Indiana/Winamac (UTC-04:00)
              </option>
              <option value="America/Boa_Vista">
                America/Boa_Vista (UTC-04:00)
              </option>
              <option value="America/Grenada">
                America/Grenada (UTC-04:00)
              </option>
              <option value="America/New_York">
                America/New_York (UTC-04:00)
              </option>
              <option value="America/St_Kitts">
                America/St_Kitts (UTC-04:00)
              </option>
              <option value="America/Caracas">
                America/Caracas (UTC-04:00)
              </option>
              <option value="America/Guadeloupe">
                America/Guadeloupe (UTC-04:00)
              </option>
              <option value="America/Toronto">
                America/Toronto (UTC-04:00)
              </option>
              <option value="SystemV/EST5EDT">
                SystemV/EST5EDT (UTC-04:00)
              </option>
              <option value="America/Argentina/Catamarca">
                America/Argentina/Catamarca (UTC-03:00)
              </option>
              <option value="Canada/Atlantic">
                Canada/Atlantic (UTC-03:00)
              </option>
              <option value="America/Argentina/Cordoba">
                America/Argentina/Cordoba (UTC-03:00)
              </option>
              <option value="America/Araguaina">
                America/Araguaina (UTC-03:00)
              </option>
              <option value="America/Argentina/Salta">
                America/Argentina/Salta (UTC-03:00)
              </option>
              <option value="Etc/GMT+3">Etc/GMT+3 (UTC-03:00)</option>
              <option value="America/Montevideo">
                America/Montevideo (UTC-03:00)
              </option>
              <option value="Brazil/East">Brazil/East (UTC-03:00)</option>
              <option value="America/Argentina/Mendoza">
                America/Argentina/Mendoza (UTC-03:00)
              </option>
              <option value="America/Argentina/Rio_Gallegos">
                America/Argentina/Rio_Gallegos (UTC-03:00)
              </option>
              <option value="America/Catamarca">
                America/Catamarca (UTC-03:00)
              </option>
              <option value="America/Cordoba">
                America/Cordoba (UTC-03:00)
              </option>
              <option value="America/Sao_Paulo">
                America/Sao_Paulo (UTC-03:00)
              </option>
              <option value="America/Argentina/Jujuy">
                America/Argentina/Jujuy (UTC-03:00)
              </option>
              <option value="America/Cayenne">
                America/Cayenne (UTC-03:00)
              </option>
              <option value="America/Recife">America/Recife (UTC-03:00)</option>
              <option value="America/Buenos_Aires">
                America/Buenos_Aires (UTC-03:00)
              </option>
              <option value="America/Paramaribo">
                America/Paramaribo (UTC-03:00)
              </option>
              <option value="America/Moncton">
                America/Moncton (UTC-03:00)
              </option>
              <option value="America/Mendoza">
                America/Mendoza (UTC-03:00)
              </option>
              <option value="America/Santarem">
                America/Santarem (UTC-03:00)
              </option>
              <option value="Atlantic/Bermuda">
                Atlantic/Bermuda (UTC-03:00)
              </option>
              <option value="America/Maceio">America/Maceio (UTC-03:00)</option>
              <option value="Atlantic/Stanley">
                Atlantic/Stanley (UTC-03:00)
              </option>
              <option value="America/Halifax">
                America/Halifax (UTC-03:00)
              </option>
              <option value="Antarctica/Rothera">
                Antarctica/Rothera (UTC-03:00)
              </option>
              <option value="America/Argentina/San_Luis">
                America/Argentina/San_Luis (UTC-03:00)
              </option>
              <option value="America/Argentina/Ushuaia">
                America/Argentina/Ushuaia (UTC-03:00)
              </option>
              <option value="Antarctica/Palmer">
                Antarctica/Palmer (UTC-03:00)
              </option>
              <option value="America/Punta_Arenas">
                America/Punta_Arenas (UTC-03:00)
              </option>
              <option value="America/Glace_Bay">
                America/Glace_Bay (UTC-03:00)
              </option>
              <option value="America/Fortaleza">
                America/Fortaleza (UTC-03:00)
              </option>
              <option value="America/Thule">America/Thule (UTC-03:00)</option>
              <option value="America/Argentina/La_Rioja">
                America/Argentina/La_Rioja (UTC-03:00)
              </option>
              <option value="America/Belem">America/Belem (UTC-03:00)</option>
              <option value="America/Jujuy">America/Jujuy (UTC-03:00)</option>
              <option value="America/Bahia">America/Bahia (UTC-03:00)</option>
              <option value="America/Goose_Bay">
                America/Goose_Bay (UTC-03:00)
              </option>
              <option value="America/Argentina/San_Juan">
                America/Argentina/San_Juan (UTC-03:00)
              </option>
              <option value="America/Argentina/ComodRivadavia">
                America/Argentina/ComodRivadavia (UTC-03:00)
              </option>
              <option value="America/Argentina/Tucuman">
                America/Argentina/Tucuman (UTC-03:00)
              </option>
              <option value="America/Rosario">
                America/Rosario (UTC-03:00)
              </option>
              <option value="SystemV/AST4ADT">
                SystemV/AST4ADT (UTC-03:00)
              </option>
              <option value="America/Argentina/Buenos_Aires">
                America/Argentina/Buenos_Aires (UTC-03:00)
              </option>
              <option value="America/St_Johns">
                America/St_Johns (UTC-02:30)
              </option>
              <option value="Canada/Newfoundland">
                Canada/Newfoundland (UTC-02:30)
              </option>
              <option value="America/Miquelon">
                America/Miquelon (UTC-02:00)
              </option>
              <option value="Etc/GMT+2">Etc/GMT+2 (UTC-02:00)</option>
              <option value="America/Godthab">
                America/Godthab (UTC-02:00)
              </option>
              <option value="America/Noronha">
                America/Noronha (UTC-02:00)
              </option>
              <option value="Brazil/DeNoronha">
                Brazil/DeNoronha (UTC-02:00)
              </option>
              <option value="Atlantic/South_Georgia">
                Atlantic/South_Georgia (UTC-02:00)
              </option>
              <option value="Etc/GMT+1">Etc/GMT+1 (UTC-01:00)</option>
              <option value="Atlantic/Cape_Verde">
                Atlantic/Cape_Verde (UTC-01:00)
              </option>
              <option value="Pacific/Kiritimati">
                Pacific/Kiritimati (UTC+14:00)
              </option>
              <option value="Etc/GMT-14">Etc/GMT-14 (UTC+14:00)</option>
              <option value="Pacific/Fakaofo">
                Pacific/Fakaofo (UTC+13:00)
              </option>
              <option value="Pacific/Enderbury">
                Pacific/Enderbury (UTC+13:00)
              </option>
              <option value="Pacific/Apia">Pacific/Apia (UTC+13:00)</option>
              <option value="Pacific/Tongatapu">
                Pacific/Tongatapu (UTC+13:00)
              </option>
              <option value="Etc/GMT-13">Etc/GMT-13 (UTC+13:00)</option>
              <option value="NZ-CHAT">NZ-CHAT (UTC+12:45)</option>
              <option value="Pacific/Chatham">
                Pacific/Chatham (UTC+12:45)
              </option>
              <option value="Pacific/Kwajalein">
                Pacific/Kwajalein (UTC+12:00)
              </option>
              <option value="Antarctica/McMurdo">
                Antarctica/McMurdo (UTC+12:00)
              </option>
              <option value="Pacific/Wallis">Pacific/Wallis (UTC+12:00)</option>
              <option value="Pacific/Fiji">Pacific/Fiji (UTC+12:00)</option>
              <option value="Pacific/Funafuti">
                Pacific/Funafuti (UTC+12:00)
              </option>
              <option value="Pacific/Nauru">Pacific/Nauru (UTC+12:00)</option>
              <option value="Kwajalein">Kwajalein (UTC+12:00)</option>
              <option value="NZ">NZ (UTC+12:00)</option>
              <option value="Pacific/Wake">Pacific/Wake (UTC+12:00)</option>
              <option value="Antarctica/South_Pole">
                Antarctica/South_Pole (UTC+12:00)
              </option>
              <option value="Pacific/Tarawa">Pacific/Tarawa (UTC+12:00)</option>
              <option value="Pacific/Auckland">
                Pacific/Auckland (UTC+12:00)
              </option>
              <option value="Asia/Kamchatka">Asia/Kamchatka (UTC+12:00)</option>
              <option value="Etc/GMT-12">Etc/GMT-12 (UTC+12:00)</option>
              <option value="Asia/Anadyr">Asia/Anadyr (UTC+12:00)</option>
              <option value="Pacific/Majuro">Pacific/Majuro (UTC+12:00)</option>
              <option value="Pacific/Ponape">Pacific/Ponape (UTC+11:00)</option>
              <option value="Pacific/Bougainville">
                Pacific/Bougainville (UTC+11:00)
              </option>
              <option value="Antarctica/Macquarie">
                Antarctica/Macquarie (UTC+11:00)
              </option>
              <option value="Pacific/Pohnpei">
                Pacific/Pohnpei (UTC+11:00)
              </option>
              <option value="Pacific/Efate">Pacific/Efate (UTC+11:00)</option>
              <option value="Pacific/Norfolk">
                Pacific/Norfolk (UTC+11:00)
              </option>
              <option value="Asia/Magadan">Asia/Magadan (UTC+11:00)</option>
              <option value="Pacific/Kosrae">Pacific/Kosrae (UTC+11:00)</option>
              <option value="Asia/Sakhalin">Asia/Sakhalin (UTC+11:00)</option>
              <option value="Pacific/Noumea">Pacific/Noumea (UTC+11:00)</option>
              <option value="Etc/GMT-11">Etc/GMT-11 (UTC+11:00)</option>
              <option value="Asia/Srednekolymsk">
                Asia/Srednekolymsk (UTC+11:00)
              </option>
              <option value="Pacific/Guadalcanal">
                Pacific/Guadalcanal (UTC+11:00)
              </option>
              <option value="Australia/Lord_Howe">
                Australia/Lord_Howe (UTC+10:30)
              </option>
              <option value="Australia/LHI">Australia/LHI (UTC+10:30)</option>
              <option value="Australia/Hobart">
                Australia/Hobart (UTC+10:00)
              </option>
              <option value="Pacific/Yap">Pacific/Yap (UTC+10:00)</option>
              <option value="Australia/Tasmania">
                Australia/Tasmania (UTC+10:00)
              </option>
              <option value="Pacific/Port_Moresby">
                Pacific/Port_Moresby (UTC+10:00)
              </option>
              <option value="Australia/ACT">Australia/ACT (UTC+10:00)</option>
              <option value="Australia/Victoria">
                Australia/Victoria (UTC+10:00)
              </option>
              <option value="Pacific/Chuuk">Pacific/Chuuk (UTC+10:00)</option>
              <option value="Australia/Queensland">
                Australia/Queensland (UTC+10:00)
              </option>
              <option value="Australia/Canberra">
                Australia/Canberra (UTC+10:00)
              </option>
              <option value="Australia/Currie">
                Australia/Currie (UTC+10:00)
              </option>
              <option value="Pacific/Guam">(UTC+10:00) Pacific/Guam</option>
              <option value="Pacific/Truk">(UTC+10:00) Pacific/Truk</option>
              <option value="Australia/NSW">(UTC+10:00) Australia/NSW</option>
              <option value="Asia/Vladivostok">
                (UTC+10:00) Asia/Vladivostok
              </option>
              <option value="Pacific/Saipan">(UTC+10:00) Pacific/Saipan</option>
              <option value="Antarctica/DumontDUrville">
                (UTC+10:00) Antarctica/DumontDUrville
              </option>
              <option value="Australia/Sydney">
                (UTC+10:00) Australia/Sydney
              </option>
              <option value="Australia/Brisbane">
                (UTC+10:00) Australia/Brisbane
              </option>
              <option value="Etc/GMT-10">(UTC+10:00) Etc/GMT-10</option>
              <option value="Asia/Ust-Nera">(UTC+10:00) Asia/Ust-Nera</option>
              <option value="Australia/Melbourne">
                (UTC+10:00) Australia/Melbourne
              </option>
              <option value="Australia/Lindeman">
                (UTC+10:00) Australia/Lindeman
              </option>
              <option value="Australia/North">
                (UTC+09:30) Australia/North
              </option>
              <option value="Australia/Yancowinna">
                (UTC+09:30) Australia/Yancowinna
              </option>
              <option value="Australia/Adelaide">
                (UTC+09:30) Australia/Adelaide
              </option>
              <option value="Australia/Broken_Hill">
                (UTC+09:30) Australia/Broken_Hill
              </option>
              <option value="Australia/South">
                (UTC+09:30) Australia/South
              </option>
              <option value="Australia/Darwin">
                (UTC+09:30) Australia/Darwin
              </option>
              <option value="Etc/GMT-9">(UTC+09:00) Etc/GMT-9</option>
              <option value="Pacific/Palau">(UTC+09:00) Pacific/Palau</option>
              <option value="Asia/Chita">(UTC+09:00) Asia/Chita</option>
              <option value="Asia/Dili">(UTC+09:00) Asia/Dili</option>
              <option value="Asia/Jayapura">(UTC+09:00) Asia/Jayapura</option>
              <option value="Asia/Yakutsk">(UTC+09:00) Asia/Yakutsk</option>
              <option value="Asia/Pyongyang">(UTC+09:00) Asia/Pyongyang</option>
              <option value="ROK">(UTC+09:00) ROK</option>
              <option value="Asia/Seoul">(UTC+09:00) Asia/Seoul</option>
              <option value="Asia/Khandyga">(UTC+09:00) Asia/Khandyga</option>
              <option value="Japan">(UTC+09:00) Japan</option>
              <option value="Asia/Tokyo">(UTC+09:00) Asia/Tokyo</option>
              <option value="Australia/Eucla">
                (UTC+08:45) Australia/Eucla
              </option>
              <option value="Asia/Kuching">(UTC+08:00) Asia/Kuching</option>
              <option value="Asia/Chungking">(UTC+08:00) Asia/Chungking</option>
              <option value="Etc/GMT-8">(UTC+08:00) Etc/GMT-8</option>
              <option value="Australia/Perth">
                (UTC+08:00) Australia/Perth
              </option>
              <option value="Asia/Macao">(UTC+08:00) Asia/Macao</option>
              <option value="Asia/Macau">(UTC+08:00) Asia/Macau</option>
              <option value="Asia/Choibalsan">
                (UTC+08:00) Asia/Choibalsan
              </option>
              <option value="Asia/Shanghai">(UTC+08:00) Asia/Shanghai</option>
              <option value="Antarctica/Casey">
                (UTC+08:00) Antarctica/Casey
              </option>
              <option value="Asia/Ulan_Bator">
                (UTC+08:00) Asia/Ulan_Bator
              </option>
              <option value="Asia/Chongqing">(UTC+08:00) Asia/Chongqing</option>
              <option value="Asia/Ulaanbaatar">
                (UTC+08:00) Asia/Ulaanbaatar
              </option>
              <option value="Asia/Taipei">(UTC+08:00) Asia/Taipei</option>
              <option value="Asia/Manila">(UTC+08:00) Asia/Manila</option>
              <option value="PRC">(UTC+08:00) PRC</option>
              <option value="Asia/Ujung_Pandang">
                (UTC+08:00) Asia/Ujung_Pandang
              </option>
              <option value="Asia/Harbin">(UTC+08:00) Asia/Harbin</option>
              <option value="Singapore">(UTC+08:00) Singapore</option>
              <option value="Asia/Brunei">(UTC+08:00) Asia/Brunei</option>
              <option value="Australia/West">(UTC+08:00) Australia/West</option>
              <option value="Asia/Hong_Kong">(UTC+08:00) Asia/Hong_Kong</option>
              <option value="Asia/Makassar">(UTC+08:00) Asia/Makassar</option>
              <option value="Hongkong">(UTC+08:00) Hongkong</option>
              <option value="Asia/Kuala_Lumpur">
                (UTC+08:00) Asia/Kuala_Lumpur
              </option>
              <option value="Asia/Irkutsk">(UTC+08:00) Asia/Irkutsk</option>
              <option value="Asia/Singapore">(UTC+08:00) Asia/Singapore</option>
              <option value="Asia/Pontianak">(UTC+07:00) Asia/Pontianak</option>
                          <option value="Etc/GMT-7">(UTC+07:00) Etc/GMT-7</option>
                          
            </select>
          </div>

          <h2 className="text-center pb-2 pt-2 text-white">To</h2>
          <div className="flex justify-center text-white">
            <select
              name="to"
              id="to"
              className="text-center text-sm w-11/12 sm:w-full sm:text-base p-1 appearance-none bg-black border hover:border-[#ee2400] cursor-pointer"
              onChange={handleToChange}
              required={true}
            >
              <option value="default">--Select--</option>
              <option value="AED">United Arab Emirates Dirham</option>
              <option value="AFN">Afghan Afghani</option>
              <option value="ALL">Albanian Lek</option>
            </select>
          </div>

          <h2 className=" text-center pb-2 pt-2 text-white">Time</h2>
          <input
            className="Input text-black text-center w-full appearance-none"
            type="number"
            required={true}
            step={0.00000001}
            onChange={handleTimeChange}
            placeholder="Enter Amount"
          />

          <h2 className=" text-center pb-2 pt-2 text-white">Converted Time</h2>
          <input
            className="Input text-black text-center w-full"
            type="number"
            step={0.00000001}
            value={convertedTime}
            readOnly
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className=" mx-auto mt-5 mb-2 p-1 pl-2 pr-2 border border-[#ee2400] hover:bg-[#ee2400]"
            >
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimezoneCard;
