using Backend.EntityModels;
using Backend.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly StickyPlzContext _dbContext;

        public GenericRepository(StickyPlzContext dbcontext)
        {
            _dbContext = dbcontext;
        }

        public virtual T SetCreatedDate(T entity)
        {
            var type = entity.GetType();
            var prop = type.GetProperty("Created");
            prop?.SetValue(entity, DateTime.Now, null);
            return entity;
        }

        public virtual T SetModifiedDate(T entity)
        {
            var type = entity.GetType();
            var prop = type.GetProperty("Modified");
            prop?.SetValue(entity, DateTime.Now, null);
            return entity;
        }

        public virtual async Task<T> Add(T entity)
        {
            SetCreatedDate(entity);
            SetModifiedDate(entity);
            await _dbContext.Set<T>().AddAsync(entity);
            return entity;
        }

        public virtual async Task<bool> Delete(T entity)
        {
            T existing = await _dbContext.Set<T>().FindAsync(entity);

            if(existing != null)
            {
                _dbContext.Set<T>().Remove(existing);
                return true;
            }

            return false;
        }

        public virtual T Update(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            SetModifiedDate(entity);
            _dbContext.Set<T>().Update(entity);

            return entity;
        }

        public virtual async Task<T> Find(params object[] keyValues)
        {
            return await _dbContext.Set<T>().FindAsync(keyValues);
        }

        public virtual async Task<T> Find(Expression<Func<T, bool>> predicate, Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _dbContext.Set<T>();
            if (include != null) { query = include(query); }
            return await query.FirstOrDefaultAsync(predicate);
        }

        public virtual async Task<List<TResult>> GetList<TResult>(Expression<Func<T, TResult>> selector,
                                      Expression<Func<T, bool>> predicate = null,
                                      Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
                                      Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
                                      bool disableTracking = true)
        {
            IQueryable<T> query = _dbContext.Set<T>();
            if (disableTracking) { query = query.AsNoTracking(); }
            if (include != null) { query = include(query); }
            if (predicate != null) { query = query.Where(predicate); }
            if (orderBy != null) { return await orderBy(query).Select(selector).ToListAsync(); }
            else { return await query.Select(selector).ToListAsync(); }
        }

        public virtual async Task<List<T>> GetAll()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public virtual async Task<List<T>> GetAll(Expression<Func<T, bool>> predicate)
        {
            return await _dbContext.Set<T>().Where(predicate).ToListAsync();
        }

        public async Task<bool> Save()
        {
            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
