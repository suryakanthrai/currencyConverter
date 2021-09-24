import {Component} from "react"
import "./index.css"

class Home extends Component{

    state = {
        amount:0,
        fromCurrency:"",
        toCurrency:"",
        currencyData:"",
        currencyResults:0,
        convertedCurrencyResults:""
    }

    componentDidMount(){
        this.getData()
    }

    getData = async() =>{
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const data = await response.json();
        this.setState({currencyData:data.rates})
    }

    updateAmount = (event) => {
        this.setState({amount:parseInt(event.target.value)})
        console.log(event.target.value)
    } 

    updateFromCurrency = (event) => {
        this.setState({fromCurrency:event.target.value})
        console.log(event.target.value)
    }

    updateToCurrency = (event) => {
        this.setState({toCurrency:event.target.value})
        console.log(event.target.value)
    }

    getFinalCurrencyResults = () => {
        const {amount,fromCurrency,toCurrency,currencyData} = this.state 
        console.log(amount)
        
        const fromCurrencyValue = currencyData[fromCurrency] 
        const toCurrencyValue = currencyData[toCurrency]
        let result = ((toCurrencyValue / fromCurrencyValue) * amount).toFixed(2);
        this.setState({convertedCurrencyResults:result})
    }

    render(){
        const {convertedCurrencyResults} = this.state
        return(
            <div>
                <h1 className="heading text-center display-2">Currency Converter</h1>
                <hr/>
    <div className="container">
  
        <div className="main">
  
            <div className="form-group">
                <label htmlFor="oamount">
                    Amount to Convert : 
                </label>
                <input type="text" 
                       className="form-control searchBox" 
                       placeholder="0.00" 
                       onChange = {this.updateAmount}
                />
            </div>
  
            <div className="row">
                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">From</span>
                        </div>
                        <select className="form-control from" onChange = {this.updateFromCurrency}>
                            <option value="">Select One …</option>
                            <option value="USD">USD</option>
                            <option value="AED">AED</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="GTQ">GTQ</option>
                            <option value="HKD">HKD</option>
                            <option value="HRK">HRK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="KZT">KZT</option>
                            <option value="MVR">MVR</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK">NOK</option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="RON">RON</option>
                            <option value="RUB">RUB</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="UYU">UYU</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                    </div>
                </div>
  
                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">To</span>
                        </div>
                        <select className="form-control to" onChange = {this.updateToCurrency}>
                            <option value="">Select One …</option>
                            <option value="USD">USD</option>
                            <option value="AED">AED</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="GTQ">GTQ</option>
                            <option value="HKD">HKD</option>
                            <option value="HRK">HRK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="KZT">KZT</option>
                            <option value="MVR">MVR</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK">NOK</option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="RON">RON</option>
                            <option value="RUB">RUB</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="UYU">UYU</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                    </div>
                </div>
            </div>
  
            <div className="text-center">
  
              
                <button className="btn btn-primary convert m-2" 
                        type="submit" onClick = {this.getFinalCurrencyResults}>
                     Convert
              </button>
  
                <button className="btn btn-primary m-2" >
                   Reset
              </button>
            </div>
  
        </div>
  
        <div id="finalAmount" className="text-center">
  
            <h2>Converted Amount :
                <span className="finalValue" style={{color:"green"}}>
                    {convertedCurrencyResults}
                </span>
            </h2>
        </div>
    </div>
    </div>
  
        )
    }
}

export default Home