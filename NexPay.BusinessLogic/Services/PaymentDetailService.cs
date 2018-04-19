using System;
using System.Linq;
using NexPay.BusinessLogic.Exceptions;
using NexPay.BusinessLogic.Interfaces;
using NexPay.DataAccess.Interfaces;
using NexPay.Domain;
using NexPay.Views.PaymentDetailViews;

namespace NexPay.BusinessLogic.Services
{
    public class PaymentDetailService : IPaymentDetailService
    {
        private readonly IPaymentDetailRepository _paymentDetailRepository;

        public PaymentDetailService(IPaymentDetailRepository paymentDetailRepository)
        {
            _paymentDetailRepository = paymentDetailRepository;
        }

        public void Create(CreatePaymentDetailView view)
        {
            var paymentDetail = new PaymentDetail
            {
                BSB = view.BSB,
                AccountName = view.AccountName,
                AccountNumber = view.AccountNumber,
                Reference = view.Reference,
                PaymentAmount = view.PaymentAmount
            };

            if (view.PaymentAmount <= 0)
            {
                throw new NextPayException("Invalid Payment Amount!");
            }
            if (string.IsNullOrEmpty(view.BSB))
            {
                throw new NextPayException("Invalid BSB!");
            }
            if (string.IsNullOrEmpty(view.Reference))
            {
                throw new NextPayException("Invalid Reference!");
            }
            if (string.IsNullOrEmpty(view.AccountName))
            {
                throw new NextPayException("Invalid Account Name!");
            }
            if (string.IsNullOrEmpty(view.AccountNumber) || !CheckCreditCard(view.AccountNumber))
            {
                throw new NextPayException("Invalid Account Number!");
            }

            _paymentDetailRepository.Add(paymentDetail);
        }

        public bool CheckCreditCard(string creditCardNumber)
        {
            try
            {
                creditCardNumber = creditCardNumber.Replace(" ", "");

                var doubledDigits = new int[creditCardNumber.Length / 2];
                var k = 0;
                for (var i = creditCardNumber.Length - 2; i >= 0; i -= 2)
                {
                    int digit = int.Parse(creditCardNumber[i].ToString());
                    doubledDigits[k] = digit * 2;
                    k++;
                }

                var total = doubledDigits.SelectMany(i => i.ToString()).Sum(t => int.Parse(t.ToString()));

                var total2 = 0;
                for (var i = creditCardNumber.Length - 1; i >= 0; i -= 2)
                {
                    var digit = int.Parse(creditCardNumber[i].ToString());
                    total2 += digit;
                }

                var final = total + total2;

                return final % 10 == 0;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
