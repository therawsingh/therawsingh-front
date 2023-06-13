"use strict";
import React, { useRef, useState } from "react";
import axios from "axios";

const CurrencyCard = () => {

  //Currency logic start here

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = `http://localhost:8080/tools/currency/to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const convertedAmount = response.data.result;
        setConvertedValue(convertedAmount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative flex h-96 w-52 lg:h-90 lg:w-80 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#080808] to-[#040404] px-8 py-16 shadow-sm shadow-[#ee2400]">
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
      <div className="flex flex-col align-baseline justify-between w-full">
        <h2 className="text-center pb-2 text-[#ee2400]">Currency Converter</h2>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-2 text-white">Currency From</h2>
          <div className="flex justify-center text-white">
            <select
              name="from"
              id="from"
              className="text-center w-11/12 sm:w-full text-sm sm:text-base p-1 appearance-none bg-black border hover:border-[#ee2400] cursor-pointer"
              onChange={handleFromCurrencyChange}
              required={true}
            >
              <option value="default">--Select--</option>
              <option value="AED">United Arab Emirates Dirham</option>
              <option value="AFN">Afghan Afghani</option>
              <option value="ALL">Albanian Lek</option>
              <option value="AMD">Armenian Dram</option>
              <option value="ANG">Netherlands Antillean Guilder</option>
              <option value="AOA">Angolan Kwanza</option>
              <option value="ARS">Argentine Peso</option>
              <option value="AUD">Australian Dollar</option>
              <option value="AWG">Aruban Florin</option>
              <option value="AZN">Azerbaijani Manat</option>
              <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
              <option value="BBD">Barbadian Dollar</option>
              <option value="BDT">Bangladeshi Taka</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BHD">Bahraini Dinar</option>
              <option value="BIF">Burundian Franc</option>
              <option value="BMD">Bermudan Dollar</option>
              <option value="BND">Brunei Dollar</option>
              <option value="BOB">Bolivian Boliviano</option>
              <option value="BRL">Brazilian Real</option>
              <option value="BSD">Bahamian Dollar</option>
              <option value="BTC">Bitcoin</option>
              <option value="BTN">Bhutanese Ngultrum</option>
              <option value="BWP">Botswanan Pula</option>
              <option value="BYN">New Belarusian Ruble</option>
              <option value="BYR">Belarusian Ruble</option>
              <option value="BZD">Belize Dollar</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CDF">Congolese Franc</option>
              <option value="CHF">Swiss Franc</option>
              <option value="CLF">Chilean Unit of Account (UF)</option>
              <option value="CLP">Chilean Peso</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="COP">Colombian Peso</option>
              <option value="CRC">Costa Rican Colón</option>
              <option value="CUC">Cuban Convertible Peso</option>
              <option value="CUP">Cuban Peso</option>
              <option value="CVE">Cape Verdean Escudo</option>
              <option value="CZK">Czech Republic Koruna</option>
              <option value="DJF">Djiboutian Franc</option>
              <option value="DKK">Danish Krone</option>
              <option value="DOP">Dominican Peso</option>
              <option value="DZD">Algerian Dinar</option>
              <option value="EGP">Egyptian Pound</option>
              <option value="ERN">Eritrean Nakfa</option>
              <option value="ETB">Ethiopian Birr</option>
              <option value="EUR">Euro</option>
              <option value="FJD">Fijian Dollar</option>
              <option value="FKP">Falkland Islands Pound</option>
              <option value="GBP">British Pound Sterling</option>
              <option value="GEL">Georgian Lari</option>
              <option value="GGP">Guernsey Pound</option>
              <option value="GHS">Ghanaian Cedi</option>
              <option value="GIP">Gibraltar Pound</option>
              <option value="GMD">Gambian Dalasi</option>
              <option value="GNF">Guinean Franc</option>
              <option value="GTQ">Guatemalan Quetzal</option>
              <option value="GYD">Guyanaese Dollar</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HNL">Honduran Lempira</option>
              <option value="HRK">Croatian Kuna</option>
              <option value="HTG">Haitian Gourde</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="IMP">Manx pound</option>
              <option value="INR">Indian Rupee</option>
              <option value="IQD">Iraqi Dinar</option>
              <option value="IRR">Iranian Rial</option>
              <option value="ISK">Icelandic Króna</option>
              <option value="JEP">Jersey Pound</option>
              <option value="JMD">Jamaican Dollar</option>
              <option value="JOD">Jordanian Dinar</option>
              <option value="JPY">Japanese Yen</option>
              <option value="KES">Kenyan Shilling</option>
              <option value="KGS">Kyrgystani Som</option>
              <option value="KHR">Cambodian Riel</option>
              <option value="KMF">Comorian Franc</option>
              <option value="KPW">North Korean Won</option>
              <option value="KRW">South Korean Won</option>
              <option value="KWD">Kuwaiti Dinar</option>
              <option value="KYD">Cayman Islands Dollar</option>
              <option value="KZT">Kazakhstani Tenge</option>
              <option value="LAK">Laotian Kip</option>
              <option value="LBP">Lebanese Pound</option>
              <option value="LKR">Sri Lankan Rupee</option>
              <option value="LRD">Liberian Dollar</option>
              <option value="LSL">Lesotho Loti</option>
              <option value="LTL">Lithuanian Litas</option>
              <option value="LVL">Latvian Lats</option>
              <option value="LYD">Libyan Dinar</option>
              <option value="MAD">Moroccan Dirham</option>
              <option value="MDL">Moldovan Leu</option>
              <option value="MGA">Malagasy Ariary</option>
              <option value="MKD">Macedonian Denar</option>
              <option value="MMK">Myanma Kyat</option>
              <option value="MNT">Mongolian Tugrik</option>
              <option value="MOP">Macanese Pataca</option>
              <option value="MRO">Mauritanian Ouguiya</option>
              <option value="MUR">Mauritian Rupee</option>
              <option value="MVR">Maldivian Rufiyaa</option>
              <option value="MWK">Malawian Kwacha</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="MZN">Mozambican Metical</option>
              <option value="NAD">Namibian Dollar</option>
              <option value="NGN">Nigerian Naira</option>
              <option value="NIO">Nicaraguan Córdoba</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="NPR">Nepalese Rupee</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="OMR">Omani Rial</option>
              <option value="PAB">Panamanian Balboa</option>
              <option value="PEN">Peruvian Nuevo Sol</option>
              <option value="PGK">Papua New Guinean Kina</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PKR">Pakistani Rupee</option>
              <option value="PLN">Polish Zloty</option>
              <option value="PYG">Paraguayan Guarani</option>
              <option value="QAR">Qatari Rial</option>
              <option value="RON">Romanian Leu</option>
              <option value="RSD">Serbian Dinar</option>
              <option value="RUB">Russian Ruble</option>
              <option value="RWF">Rwandan Franc</option>
              <option value="SAR">Saudi Riyal</option>
              <option value="SBD">Solomon Islands Dollar</option>
              <option value="SCR">Seychellois Rupee</option>
              <option value="SDG">Sudanese Pound</option>
              <option value="SEK">Swedish Krona</option>
              <option value="SGD">Singapore Dollar</option>
              <option value="SHP">Saint Helena Pound</option>
              <option value="SLE">Sierra Leonean Leone</option>
              <option value="SLL">Sierra Leonean Leone</option>
              <option value="SOS">Somali Shilling</option>
              <option value="SRD">Surinamese Dollar</option>
              <option value="STD">São Tomé and Príncipe Dobra</option>
              <option value="SVC">Salvadoran Colón</option>
              <option value="SYP">Syrian Pound</option>
              <option value="SZL">Swazi Lilangeni</option>
              <option value="THB">Thai Baht</option>
              <option value="TJS">Tajikistani Somoni</option>
              <option value="TMT">Turkmenistani Manat</option>
              <option value="TND">Tunisian Dinar</option>
              <option value="TOP">Tongan Paʻanga</option>
              <option value="TRY">Turkish Lira</option>
              <option value="TTD">Trinidad and Tobago Dollar</option>
              <option value="TWD">New Taiwan Dollar</option>
              <option value="TZS">Tanzanian Shilling</option>
              <option value="UAH">Ukrainian Hryvnia</option>
              <option value="UGX">Ugandan Shilling</option>
              <option value="USD">United States Dollar</option>
              <option value="UYU">Uruguayan Peso</option>
              <option value="UZS">Uzbekistan Som</option>
              <option value="VEF">Venezuelan Bolívar Fuerte</option>
              <option value="VES">Sovereign Bolivar</option>
              <option value="VND">Vietnamese Dong</option>
              <option value="VUV">Vanuatu Vatu</option>
              <option value="WST">Samoan Tala</option>
              <option value="XAF">CFA Franc BEAC</option>
              <option value="XAG">Silver (troy ounce)</option>
              <option value="XAU">Gold (troy ounce)</option>
              <option value="XCD">East Caribbean Dollar</option>
              <option value="XDR">Special Drawing Rights</option>
              <option value="XOF">CFA Franc BCEAO</option>
              <option value="XPF">CFP Franc</option>
              <option value="YER">Yemeni Rial</option>
              <option value="ZAR">South African Rand</option>
              <option value="ZMK">Zambian Kwacha (pre-2013)</option>
              <option value="ZMW">Zambian Kwacha</option>
              <option value="ZWL">Zimbabwean Dollar</option>
            </select>
          </div>

          <h2 className="text-center pb-2 pt-2 text-white">Currency To</h2>
          <div className="flex justify-center text-white">
            <select
              name="to"
              id="to"
              className="text-center text-sm w-11/12 sm:w-full sm:text-base p-1 appearance-none bg-black border hover:border-[#ee2400] cursor-pointer"
              onChange={handleToCurrencyChange}
              required={true}
            >
              <option value="default">--Select--</option>
              <option value="AED">United Arab Emirates Dirham</option>
              <option value="AFN">Afghan Afghani</option>
              <option value="ALL">Albanian Lek</option>
              <option value="AMD">Armenian Dram</option>
              <option value="ANG">Netherlands Antillean Guilder</option>
              <option value="AOA">Angolan Kwanza</option>
              <option value="ARS">Argentine Peso</option>
              <option value="AUD">Australian Dollar</option>
              <option value="AWG">Aruban Florin</option>
              <option value="AZN">Azerbaijani Manat</option>
              <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
              <option value="BBD">Barbadian Dollar</option>
              <option value="BDT">Bangladeshi Taka</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BHD">Bahraini Dinar</option>
              <option value="BIF">Burundian Franc</option>
              <option value="BMD">Bermudan Dollar</option>
              <option value="BND">Brunei Dollar</option>
              <option value="BOB">Bolivian Boliviano</option>
              <option value="BRL">Brazilian Real</option>
              <option value="BSD">Bahamian Dollar</option>
              <option value="BTC">Bitcoin</option>
              <option value="BTN">Bhutanese Ngultrum</option>
              <option value="BWP">Botswanan Pula</option>
              <option value="BYN">New Belarusian Ruble</option>
              <option value="BYR">Belarusian Ruble</option>
              <option value="BZD">Belize Dollar</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CDF">Congolese Franc</option>
              <option value="CHF">Swiss Franc</option>
              <option value="CLF">Chilean Unit of Account (UF)</option>
              <option value="CLP">Chilean Peso</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="COP">Colombian Peso</option>
              <option value="CRC">Costa Rican Colón</option>
              <option value="CUC">Cuban Convertible Peso</option>
              <option value="CUP">Cuban Peso</option>
              <option value="CVE">Cape Verdean Escudo</option>
              <option value="CZK">Czech Republic Koruna</option>
              <option value="DJF">Djiboutian Franc</option>
              <option value="DKK">Danish Krone</option>
              <option value="DOP">Dominican Peso</option>
              <option value="DZD">Algerian Dinar</option>
              <option value="EGP">Egyptian Pound</option>
              <option value="ERN">Eritrean Nakfa</option>
              <option value="ETB">Ethiopian Birr</option>
              <option value="EUR">Euro</option>
              <option value="FJD">Fijian Dollar</option>
              <option value="FKP">Falkland Islands Pound</option>
              <option value="GBP">British Pound Sterling</option>
              <option value="GEL">Georgian Lari</option>
              <option value="GGP">Guernsey Pound</option>
              <option value="GHS">Ghanaian Cedi</option>
              <option value="GIP">Gibraltar Pound</option>
              <option value="GMD">Gambian Dalasi</option>
              <option value="GNF">Guinean Franc</option>
              <option value="GTQ">Guatemalan Quetzal</option>
              <option value="GYD">Guyanaese Dollar</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HNL">Honduran Lempira</option>
              <option value="HRK">Croatian Kuna</option>
              <option value="HTG">Haitian Gourde</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="IMP">Manx pound</option>
              <option value="INR">Indian Rupee</option>
              <option value="IQD">Iraqi Dinar</option>
              <option value="IRR">Iranian Rial</option>
              <option value="ISK">Icelandic Króna</option>
              <option value="JEP">Jersey Pound</option>
              <option value="JMD">Jamaican Dollar</option>
              <option value="JOD">Jordanian Dinar</option>
              <option value="JPY">Japanese Yen</option>
              <option value="KES">Kenyan Shilling</option>
              <option value="KGS">Kyrgystani Som</option>
              <option value="KHR">Cambodian Riel</option>
              <option value="KMF">Comorian Franc</option>
              <option value="KPW">North Korean Won</option>
              <option value="KRW">South Korean Won</option>
              <option value="KWD">Kuwaiti Dinar</option>
              <option value="KYD">Cayman Islands Dollar</option>
              <option value="KZT">Kazakhstani Tenge</option>
              <option value="LAK">Laotian Kip</option>
              <option value="LBP">Lebanese Pound</option>
              <option value="LKR">Sri Lankan Rupee</option>
              <option value="LRD">Liberian Dollar</option>
              <option value="LSL">Lesotho Loti</option>
              <option value="LTL">Lithuanian Litas</option>
              <option value="LVL">Latvian Lats</option>
              <option value="LYD">Libyan Dinar</option>
              <option value="MAD">Moroccan Dirham</option>
              <option value="MDL">Moldovan Leu</option>
              <option value="MGA">Malagasy Ariary</option>
              <option value="MKD">Macedonian Denar</option>
              <option value="MMK">Myanma Kyat</option>
              <option value="MNT">Mongolian Tugrik</option>
              <option value="MOP">Macanese Pataca</option>
              <option value="MRO">Mauritanian Ouguiya</option>
              <option value="MUR">Mauritian Rupee</option>
              <option value="MVR">Maldivian Rufiyaa</option>
              <option value="MWK">Malawian Kwacha</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="MZN">Mozambican Metical</option>
              <option value="NAD">Namibian Dollar</option>
              <option value="NGN">Nigerian Naira</option>
              <option value="NIO">Nicaraguan Córdoba</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="NPR">Nepalese Rupee</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="OMR">Omani Rial</option>
              <option value="PAB">Panamanian Balboa</option>
              <option value="PEN">Peruvian Nuevo Sol</option>
              <option value="PGK">Papua New Guinean Kina</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PKR">Pakistani Rupee</option>
              <option value="PLN">Polish Zloty</option>
              <option value="PYG">Paraguayan Guarani</option>
              <option value="QAR">Qatari Rial</option>
              <option value="RON">Romanian Leu</option>
              <option value="RSD">Serbian Dinar</option>
              <option value="RUB">Russian Ruble</option>
              <option value="RWF">Rwandan Franc</option>
              <option value="SAR">Saudi Riyal</option>
              <option value="SBD">Solomon Islands Dollar</option>
              <option value="SCR">Seychellois Rupee</option>
              <option value="SDG">Sudanese Pound</option>
              <option value="SEK">Swedish Krona</option>
              <option value="SGD">Singapore Dollar</option>
              <option value="SHP">Saint Helena Pound</option>
              <option value="SLE">Sierra Leonean Leone</option>
              <option value="SLL">Sierra Leonean Leone</option>
              <option value="SOS">Somali Shilling</option>
              <option value="SRD">Surinamese Dollar</option>
              <option value="STD">São Tomé and Príncipe Dobra</option>
              <option value="SVC">Salvadoran Colón</option>
              <option value="SYP">Syrian Pound</option>
              <option value="SZL">Swazi Lilangeni</option>
              <option value="THB">Thai Baht</option>
              <option value="TJS">Tajikistani Somoni</option>
              <option value="TMT">Turkmenistani Manat</option>
              <option value="TND">Tunisian Dinar</option>
              <option value="TOP">Tongan Paʻanga</option>
              <option value="TRY">Turkish Lira</option>
              <option value="TTD">Trinidad and Tobago Dollar</option>
              <option value="TWD">New Taiwan Dollar</option>
              <option value="TZS">Tanzanian Shilling</option>
              <option value="UAH">Ukrainian Hryvnia</option>
              <option value="UGX">Ugandan Shilling</option>
              <option value="USD">United States Dollar</option>
              <option value="UYU">Uruguayan Peso</option>
              <option value="UZS">Uzbekistan Som</option>
              <option value="VEF">Venezuelan Bolívar Fuerte</option>
              <option value="VES">Sovereign Bolivar</option>
              <option value="VND">Vietnamese Dong</option>
              <option value="VUV">Vanuatu Vatu</option>
              <option value="WST">Samoan Tala</option>
              <option value="XAF">CFA Franc BEAC</option>
              <option value="XAG">Silver (troy ounce)</option>
              <option value="XAU">Gold (troy ounce)</option>
              <option value="XCD">East Caribbean Dollar</option>
              <option value="XDR">Special Drawing Rights</option>
              <option value="XOF">CFA Franc BCEAO</option>
              <option value="XPF">CFP Franc</option>
              <option value="YER">Yemeni Rial</option>
              <option value="ZAR">South African Rand</option>
              <option value="ZMK">Zambian Kwacha (pre-2013)</option>
              <option value="ZMW">Zambian Kwacha</option>
              <option value="ZWL">Zimbabwean Dollar</option>
            </select>
          </div>

          <h2 className=" text-center pb-2 pt-2 text-white">Value</h2>
          <input
            className="Input text-black text-center w-full appearance-none"
            type="number"
            required={true}
            step={0.00000001}
            onChange={handleAmountChange}
            placeholder="Enter Amount"
          />

          <h2 className=" text-center pb-2 pt-2 text-white">Converted Value</h2>
          <input
            className="Input text-black text-center w-full"
            type="number"
            step={0.00000001}
            value={convertedValue}
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

export default CurrencyCard;
