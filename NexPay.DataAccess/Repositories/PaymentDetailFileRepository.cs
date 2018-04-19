using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using NexPay.DataAccess.Interfaces;
using NexPay.Domain;

namespace NexPay.DataAccess.Repositories
{
    public class PaymentDetailFileRepository : IPaymentDetailRepository
    {
        private readonly string _path;

        public PaymentDetailFileRepository()
        {
            _path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "PaymentDetails.json");
        }

        public void Add(PaymentDetail paymentDetail)
        {
            var list = new List<PaymentDetail>();
            if (File.Exists(_path))
            {
                var json = File.ReadAllText(_path);
                list = JsonConvert.DeserializeObject<List<PaymentDetail>>(json);
            }
            list.Add(paymentDetail);
            var result = JsonConvert.SerializeObject(list);
            File.WriteAllText(_path, result);
        }
    }
}
