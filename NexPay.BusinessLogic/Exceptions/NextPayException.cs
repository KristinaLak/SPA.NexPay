using System;

namespace NexPay.BusinessLogic.Exceptions
{
    public class NextPayException : Exception
    {
        public NextPayException()
        {
        }

        public NextPayException(string message)
            : base(message)
        {
        }

        public NextPayException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
