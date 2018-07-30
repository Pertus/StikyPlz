using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<List<TResult>> GetList<TResult>(Expression<Func<T, TResult>> selector,
                                              Expression<Func<T, bool>> predicate = null,
                                              Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
                                              Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
                                              bool disableTracking = true);
        Task<T> Find(params object[] keyValues);
        Task<T> Add(T entity);
        Task<bool> Delete(T entity);
        T Update(T entity);
        T SetCreatedDate(T entity);
        T SetModifiedDate(T entity);
        Task<bool> Save();
    }
}
