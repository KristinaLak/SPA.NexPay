using Microsoft.VisualStudio.TestTools.UnitTesting;
using NexPay.BusinessLogic.Exceptions;
using NexPay.DataAccess.Repositories;
using NexPay.Domain;

namespace NexPay.BusinessLogicTests.RepositoriesTests
{
    [TestClass]
    public class PaymentDetailFileRepositoryTest
    {
        private readonly PaymentDetailFileRepository _paymentDetailFileRepository;

        public PaymentDetailFileRepositoryTest()
        {
            _paymentDetailFileRepository = new PaymentDetailFileRepository();
        }

        [TestMethod]
        public void AddTest()
        {
            var view = new PaymentDetail
            {
                AccountName = "AccountName",
                AccountNumber = "5147004213414803",
                BSB = "BSB",
                PaymentAmount = 500,
                Reference = "Reference"
            };
            try
            {
                _paymentDetailFileRepository.Add(view);
                Assert.IsTrue(true);
            }
            catch (NextPayException)
            {
                Assert.Fail();
            }
        }
    }
}
