const numberWithCommas = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$,")

export default numberWithCommas