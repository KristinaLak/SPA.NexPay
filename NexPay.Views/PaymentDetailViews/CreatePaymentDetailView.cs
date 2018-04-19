namespace NexPay.Views.PaymentDetailViews
{
    public class CreatePaymentDetailView
    {
        public string BSB { get; set; }
        public string AccountNumber { get; set; }
        public string AccountName { get; set; }
        public string Reference { get; set; }
        public double PaymentAmount { get; set; }
    }
}