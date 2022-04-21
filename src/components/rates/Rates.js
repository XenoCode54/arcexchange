import React, { useEffect } from 'react';
import './rates.css';

export default function Rates () {
  const [bitcoinRates, setBitcoinRates] = React.useState(null);
  const [ethereumRates, setEthereumRates] = React.useState(null);
  const [dogeCoinRates, setDogeCoinRates] = React.useState(null);
  const [liteCoinRates, setLiteCoinRates] = React.useState(null);
  const [isLoadingBitcoin, setIsLoadingBitcoin] = React.useState(true);
  const [isLoadingEthereum, setIsLoadingEthereum] = React.useState(true);
  const [isLoadingDogeCoin, setIsLoadingDogeCoin] = React.useState(true);
  const [isLoadingLiteCoin, setIsLoadingLiteCoin] = React.useState(true);
  const [errorBitcoin, setErrorBitcoin] = React.useState(null);
  const [errorLiteCoin, setErrorLiteCoin] = React.useState(null);
  const [errorEthereum, setErrorEthereum] = React.useState(null);
  const [errorDogeCoin, setErrorDogeCoin] = React.useState(null);

  let headers = new Headers();
  // headers.append('X-CMC_PRO_API_KEY', 'b9f8c8c0-f8f4-4f0f-b8b6-b9f8c8c0f8f4');
  headers.append('X-CoinAPI-Key', process.env.REACT_APP_COIN_API_KEY);

  useEffect(() => {
    const fetchBitcoin = async () => {
      setIsLoadingBitcoin(true);
      try {
        const response = await fetch(
          'https://rest.coinapi.io/v1/exchangerate/BTC/USD',
          {
            method: 'GET',
            headers: headers
          });
        const json = await response.json();
        // console.log('Bitcoin', json);
        setBitcoinRates(json);
        setIsLoadingBitcoin(false);
      } catch (error) {
        console.log(error, 'error');
        setErrorBitcoin(error.message.error);
      }
    };
    const fetchEthereum = async () => {
      setIsLoadingEthereum(true);
      try {
        const response = await fetch(
          'https://rest.coinapi.io/v1/exchangerate/ETH/USD',
          {
            method: 'GET',
            headers: headers
          });
        const json = await response.json();
        // console.log('Ethereum', json);
        setEthereumRates(json);
        setIsLoadingEthereum(false);
      } catch (error) {
        console.log(error, 'error');
        setErrorEthereum(error.message);
      }
    };
    const fetchDogeCoin = async () => {
      setIsLoadingDogeCoin(true);
      try {
        const response = await fetch(
          'https://rest.coinapi.io/v1/exchangerate/DOGE/USD',
          {
            method: 'GET',
            headers: headers
          });
        const json = await response.json();
        // console.log('DogeCoin', json);
        setDogeCoinRates(json);
        setIsLoadingDogeCoin(false);
      } catch (error) {
        console.log(error, 'error');
        setErrorDogeCoin(error.message);
      }
    };
    const fetchLiteCoin = async () => {
      setIsLoadingLiteCoin(true);
      try {
        const response = await fetch(
          'https://rest.coinapi.io/v1/exchangerate/LTC/USD',
          {
            method: 'GET',
            headers: headers
          });
        const json = await response.json();
        // console.log('LiteCoin', json);
        setLiteCoinRates(json);
        setIsLoadingLiteCoin(false);
      } catch (error) {
        console.log(error, 'error');
        setErrorLiteCoin(error.message);
      }
    };

    fetchBitcoin();
    fetchEthereum();
    fetchDogeCoin();
    fetchLiteCoin();
  }, []);

  return (
    <div className={'main-container-rates'}>
      <div className={'container-rates'}>
        <p className={'title-rates'}>BITCOIN</p>
        <p>CURRENT PRICE: {errorBitcoin ? errorBitcoin : isLoadingBitcoin ? "LOADING..." : bitcoinRates?.rate ? bitcoinRates.rate.toFixed(2) : "Not Available"}</p>
      </div>
      <div className={'container-rates'}>
        <p className={'title-rates'}>ETHEREUM</p>
        <p>CURRENT PRICE: {errorEthereum ? errorEthereum : isLoadingEthereum ? "LOADING..." : ethereumRates?.rate ? ethereumRates.rate.toFixed(2) : "Not Available"}</p>
      </div>
      <div className={'container-rates'}>
        <p className={'title-rates'}>DOGE COIN</p>
        <p>CURRENT PRICE: {errorDogeCoin ? errorDogeCoin : isLoadingDogeCoin ? "LOADING..." : dogeCoinRates?.rate ? dogeCoinRates.rate.toFixed(2) : "Not Available"}</p>
      </div>
        <div className={'container-rates'}>
        <p className={'title-rates'}>LITE COIN</p>
        <p>CURRENT PRICE: {errorLiteCoin ? errorLiteCoin : isLoadingLiteCoin ? "LOADING..." : liteCoinRates?.rate ? liteCoinRates.rate.toFixed(2) : "Not Available"}</p>
      </div>
    </div>
  );
}
