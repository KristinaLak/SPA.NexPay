using System;

namespace NexPay.Domain
{
    public class PaymentDetail
    {
        public string Id { get; set; }
        public string BSB { get; set; }
        public string AccountNumber { get; set; }
        public string AccountName { get; set; }
        public string Reference { get; set; }
        public double PaymentAmount { get; set; }
        public DateTime CreationDate { get; set; }

        public PaymentDetail()
        {
            Id = Guid.NewGuid().ToString();
            CreationDate = DateTime.UtcNow;
        }
    }
}