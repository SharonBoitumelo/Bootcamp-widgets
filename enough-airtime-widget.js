document.addEventListener('alpine:init', () => {
    
    Alpine.data('enoughAirtimeWidget', function(){
        return {
            airtimeUsage : '',
        amountAvailable : '0.00',
        airtimeMessage : '',
        calculate() {
            this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.amountAvailable)
        }
        }
    });
})
