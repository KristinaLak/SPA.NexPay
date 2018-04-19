using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using NexPay.BusinessLogic.Exceptions;
using NexPay.BusinessLogic.Services;
using NexPay.DataAccess.Interfaces;
using NexPay.DataAccess.Repositories;
using NexPay.Domain;
using NexPay.Views.PaymentDetailViews;

namespace NexPay.BusinessLogicTests.ServicesTests
{
    [TestClass]
    public class PaymentDetailServiceTest
    {
        private readonly PaymentDetailService _paymentDetailService;

        public PaymentDetailServiceTest()
        {
            var paymentDetailFileRepositoryMock = new Mock<IPaymentDetailRepository>();
            paymentDetailFileRepositoryMock.Setup(rep => rep.Add(It.IsAny<PaymentDetail>()));
            _paymentDetailService = new PaymentDetailService(paymentDetailFileRepositoryMock.Object);
        }

        [TestMethod]
        public void CreateValidDataTest()
        {
            var view = new CreatePaymentDetailView
            {
                AccountName = "AccountName",
                AccountNumber = "5147004213414803",
                BSB = "BSB",
                PaymentAmount = 500,
                Reference = "Reference"
            };
            try
            {
                _paymentDetailService.Create(view);
                Assert.IsTrue(true);
            }
            catch (NextPayException)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void CreateIncorrectAccountNumberTest()
        {
            var view = new CreatePaymentDetailView
            {
                AccountName = "AccountName",
                AccountNumber = "5147SADG004213414803",
                BSB = "BSB",
                PaymentAmount = 500,
                Reference = "Reference"
            };
            try
            {
                _paymentDetailService.Create(view);
            }
            catch (NextPayException ex)
            {
                if (ex.Message == "Invalid Account Number!")
                {
                    Assert.IsTrue(true);
                    return;
                }
            }
            Assert.Fail();
        }

        [TestMethod]
        public void CreateIncorrectBSBTest()
        {
            var view = new CreatePaymentDetailView
            {
                AccountName = "AccountName",
                AccountNumber = "4111111111111111",
                BSB = string.Empty,
                PaymentAmount = 500,
                Reference = "Reference"
            };
            try
            {
                _paymentDetailService.Create(view);
            }
            catch (NextPayException ex)
            {
                if (ex.Message == "Invalid BSB!")
                {
                    Assert.IsTrue(true);
                    return;
                }
            }
            Assert.Fail();
        }

        [TestMethod]
        public void CreateIncorrectPaymentAmountTest()
        {
            var view = new CreatePaymentDetailView
            {
                AccountName = string.Empty,
                AccountNumber = "4111111111111111",
                BSB = "test",
                PaymentAmount = 500,
                Reference = "Reference"
            };
            try
            {
                _paymentDetailService.Create(view);
            }
            catch (NextPayException ex)
            {
                if (ex.Message == "Invalid Account Name!")
                {
                    Assert.IsTrue(true);
                    return;
                }
            }
            Assert.Fail();
        }

    }
}
