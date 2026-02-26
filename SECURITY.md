# Security Policy - Not By Chance

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please email security@notbychanceoutreach.com instead of using GitHub issues.

## Security Status

- ✅ No hardcoded secrets or API keys
- ✅ Strong Content Security Policy enforced
- ✅ HTTPS-only in production
- ✅ Security headers properly configured
- ✅ .gitignore prevents committing sensitive files

## Deployment Security

This site is deployed on Netlify with:
- Automatic HTTPS/TLS certificates
- Security headers enforced
- CSP: Restricts scripts to trusted sources only
- Frame embedding protection
- Referrer policy: strict-origin-when-cross-origin

## Contributing Securely

1. Never commit `.env`, `.key`, or `secrets` files
2. Use environment variables for any sensitive configuration
3. Keep dependencies updated
4. Report security issues privately

## Dependencies

All JavaScript/Node dependencies are audited regularly:
```bash
npm audit
```

---

Last Updated: 2026-02-26
