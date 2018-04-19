using NexPay.Domain;

namespace NexPay.DataAccess.Interfaces
{
    public interface IPaymentDetailRepository
    {
        void Add(PaymentDetail paymentDetail);
    }
}