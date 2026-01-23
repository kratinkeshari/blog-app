
function Stats({stats}) {
  return (
            <div style={{
          background: '#f0f9ff',
          border: '2px solid #0ea5e9',
          borderRadius: '8px',
          padding: '24px',
          marginTop: '24px'
        }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '16px',
            marginTop: '20px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '16px', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0ea5e9' }}>
                {stats.users}
              </div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                Users
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '16px', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0ea5e9' }}>
                {stats.blogs}
              </div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                Blogs
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '16px', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0ea5e9' }}>
                {stats.categories}
              </div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                Categories
              </div>
            </div>
          </div>
        </div>
  )
}

export default Stats;