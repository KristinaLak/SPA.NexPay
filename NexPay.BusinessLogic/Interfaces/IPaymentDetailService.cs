using NexPay.Views.PaymentDetailViews;

namespace NexPay.BusinessLogic.Interfaces
{
    public interface IPaymentDetailService
    {
        void Create(CreatePaymentDetailView view);
    }
}