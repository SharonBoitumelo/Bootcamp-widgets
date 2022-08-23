document.addEventListener('alpine:init', () => {
    
    Alpine.data('transportFeeWidget', function(){
        return {
        shift: '',
        message : '',
        shiftFee() {
            this.message = transportFee(this.shift);
            setTimeout(() => {
                this.message = '';
                this.shift = '';
            }, 3000);
        }
        }
    });
})