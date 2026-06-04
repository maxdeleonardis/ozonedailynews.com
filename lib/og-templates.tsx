/**
 * OG Image Templates for Satori
 * 
 * Reusable OG image generators for all article types.
 * Each template returns JSX that Satori converts to PNG.
 * 
 * Standards:
 * - 1200x675px (16:9 for news articles)
 * - 1200x630px (1.91:1 for general pages)
 * - Brand colors: #3b82f6 (blue), #8b5cf6 (purple), #06b6d4 (cyan)
 * - Dark gradient backgrounds
 */

interface NewsArticleOGProps {
  title: string;
  category: string;
  author?: string;
  publishDate?: string;
}

interface CreatorProfileOGProps {
  name: string;
  role: string;
  platform?: string;
  followers?: string;
}

interface HubPageOGProps {
  title: string;
  description: string;
  category?: string;
}

/**
 * NewsArticle OG Template
 * For: NewsArticleDB pages (breaking news, tech, gaming, etc.)
 */
export function NewsArticleOG({ title, category, author, publishDate }: NewsArticleOGProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        padding: '64px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
        }}
      />

      {/* Header: Logo + Category badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 900,
              color: '#fff',
            }}
          >
            O
          </div>
          <span
            style={{
              fontSize: '38px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
            }}
          >
            OzoneNews
          </span>
        </div>

        {category && (
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              fontSize: '20px',
              fontWeight: 700,
              color: '#3b82f6',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {category}
          </div>
        )}
      </div>

      {/* Article title */}
      <div
        style={{
          fontSize: '64px',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: '1000px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </div>

      {/* Footer: Author + Date */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          fontSize: '22px',
          color: '#94a3b8',
          width: '100%',
        }}
      >
        {author && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3b82f6',
              }}
            />
            <span>{author}</span>
          </div>
        )}
        {publishDate && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#8b5cf6',
              }}
            />
            <span>{publishDate}</span>
          </div>
        )}
      </div>

      {/* Bottom accent gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(0deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

/**
 * CreatorProfile OG Template
 * For: CreatorArticleDB pages (influencer profiles)
 */
export function CreatorProfileOG({ name, role, platform, followers }: CreatorProfileOGProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 50%, #312e81 100%)',
        padding: '64px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #8b5cf6 0%, #d946ef 50%, #f472b6 100%)',
        }}
      />

      {/* Header: Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 900,
            color: '#fff',
          }}
        >
          O
        </div>
        <span
          style={{
            fontSize: '38px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.5px',
          }}
        >
          OzoneNews
        </span>
      </div>

      {/* Creator name */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1,
            letterSpacing: '-2px',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: '36px',
            fontWeight: 500,
            color: '#c4b5fd',
            letterSpacing: '-0.5px',
          }}
        >
          {role}
        </div>
      </div>

      {/* Footer: Platform + Followers */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          fontSize: '24px',
          color: '#94a3b8',
          width: '100%',
        }}
      >
        {platform && (
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              fontSize: '22px',
              fontWeight: 700,
              color: '#8b5cf6',
            }}
          >
            {platform}
          </div>
        )}
        {followers && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#8b5cf6',
              }}
            />
            <span>{followers} followers</span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * HubPage OG Template
 * For: Category hubs, pillar pages, topic indexes
 */
export function HubPageOG({ title, description, category }: HubPageOGProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 40%, #16213e 100%)',
        padding: '64px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}
    >
      {/* Accent bar top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 33%, #06b6d4 66%, #3b82f6 100%)',
        }}
      />

      {/* Logo + Category */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 900,
              color: '#fff',
            }}
          >
            O
          </div>
          <span
            style={{
              fontSize: '38px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
            }}
          >
            OzoneNews
          </span>
        </div>

        {category && (
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              fontSize: '20px',
              fontWeight: 700,
              color: '#06b6d4',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {category}
          </div>
        )}
      </div>

      {/* Hub title */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' }}>
        <div
          style={{
            fontSize: '68px',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-2px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 400,
            color: '#94a3b8',
            lineHeight: 1.4,
            letterSpacing: '-0.5px',
          }}
        >
          {description}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          fontSize: '22px',
          color: '#64748b',
          fontWeight: 500,
        }}
      >
        ozonenetwork.news
      </div>
    </div>
  );
}

/**
 * JackArticle OG Template
 * For: Premium research reports, investigations, long-form analysis
 */
export function JackArticleOG({ title, category, author, publishDate }: NewsArticleOGProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #14532d 50%, #166534 100%)',
        padding: '64px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 900,
              color: '#fff',
            }}
          >
            O
          </div>
          <span
            style={{
              fontSize: '38px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
            }}
          >
            OzoneNews
          </span>
        </div>

        <div
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            fontSize: '18px',
            fontWeight: 700,
            color: '#10b981',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Premium Report
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '64px',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: '1000px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {title}
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          fontSize: '22px',
          color: '#94a3b8',
          width: '100%',
        }}
      >
        {author && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
              }}
            />
            <span>{author}</span>
          </div>
        )}
        {category && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>{category}</span>
          </div>
        )}
      </div>

      {/* Bottom accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(0deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
